import * as React from "react"

import { Label, LabelMarker } from "@/components/ui/label"
import { cn } from "@/lib/utils"

type NamePathPart = number | string
type StoreValue = unknown
type Store = Record<string, StoreValue>
type ValidateTrigger = false | string | string[]
type ValidateStatus = "error" | "success" | "validating" | "warning"

/**
 * Field name path used to read and write values in a form store.
 */
type NamePath = NamePathPart | readonly NamePathPart[]

/**
 * Validation rule for a form field.
 */
interface FormRule {
  /**
   * Fails validation when the field value is empty.
   * @default false
   */
  required?: boolean
  /**
   * Fails validation when a string or array is longer than this value, or a number is greater than it.
   */
  max?: number
  /**
   * Custom validation message shown when this rule fails.
   */
  message?: React.ReactNode
  /**
   * Fails validation when a string or array is shorter than this value, or a number is less than it.
   */
  min?: number
  /**
   * Fails validation when a string or array length does not equal this value, or a number is not equal to it.
   */
  len?: number
  /**
   * Fails validation when a string does not match this pattern.
   */
  pattern?: RegExp
  /**
   * Checks a basic runtime value type.
   */
  type?: "array" | "boolean" | "email" | "number" | "string"
  /**
   * Custom async or sync validator.
   */
  validator?: (
    rule: FormRule,
    value: StoreValue,
    form: FormInstance,
  ) => Promise<void> | void
  /**
   * Trigger names that should run this rule.
   */
  validateTrigger?: ValidateTrigger
  /**
   * Treats whitespace-only strings as empty when `required` is enabled.
   * @default false
   */
  whitespace?: boolean
}

/**
 * Field data used by `setFields`.
 */
interface FieldData {
  /**
   * Field name path.
   */
  name: NamePath
  /**
   * Field validation errors.
   */
  errors?: React.ReactNode[]
  /**
   * Whether the field has been touched.
   */
  touched?: boolean
  /**
   * Field value.
   */
  value?: StoreValue
  /**
   * Whether the field is currently validating.
   */
  validating?: boolean
}

/**
 * Error info passed to `onFinishFailed`.
 */
interface ValidateErrorInfo<Values extends Store = Store> {
  /**
   * Current form values.
   */
  values: Values
  /**
   * Field errors collected during validation.
   */
  errorFields: FieldData[]
}

/**
 * Imperative form instance returned by `Form.useForm`.
 */
interface FormInstance<Values extends Store = Store> {
  /**
   * Gets a single field value.
   */
  getFieldValue: (name: NamePath) => StoreValue
  /**
   * Gets all registered field values or the selected name paths.
   */
  getFieldsValue: (nameList?: readonly NamePath[] | true) => Values
  /**
   * Resets fields back to `initialValues`.
   */
  resetFields: (nameList?: readonly NamePath[]) => void
  /**
   * Sets field metadata and values.
   */
  setFields: (fields: FieldData[]) => void
  /**
   * Sets a single field value.
   */
  setFieldValue: (name: NamePath, value: StoreValue) => void
  /**
   * Merges multiple values into the form store.
   */
  setFieldsValue: (values: Partial<Values>) => void
  /**
   * Submits the form and runs validation.
   */
  submit: () => void
  /**
   * Validates registered fields or the selected name paths.
   */
  validateFields: (nameList?: readonly NamePath[]) => Promise<Values>
}

/**
 * Props for the sticker form root.
 * @remarks Inherits native form attributes and adds antd-style form state callbacks.
 */
interface FormProps<Values extends Store = Store> extends Omit<
  React.ComponentProps<"form">,
  "onSubmit"
> {
  /**
   * Disables all registered fields by default.
   * @default false
   */
  disabled?: boolean
  /**
   * Controlled form instance created by `Form.useForm`.
   */
  form?: FormInstance<Values>
  /**
   * Initial values copied into the form store on first mount.
   */
  initialValues?: Partial<Values>
  /**
   * Controls label and field layout.
   * @default "vertical"
   */
  layout?: "horizontal" | "inline" | "vertical"
  /**
   * Called after validation fails during submit.
   */
  onFinishFailed?: (errorInfo: ValidateErrorInfo<Values>) => void
  /**
   * Called after validation succeeds during submit.
   */
  onFinish?: (values: Values) => void
  /**
   * Default field validation trigger.
   * @default "onChange"
   */
  validateTrigger?: ValidateTrigger
}

/**
 * Props for a sticker form field.
 */
interface FormItemProps extends React.ComponentProps<"div"> {
  /**
   * Controlled field child.
   */
  children?: React.ReactNode
  /**
   * Extra helper copy rendered below the field.
   */
  extra?: React.ReactNode
  /**
   * Custom help content. When omitted, validation errors are shown.
   */
  help?: React.ReactNode
  /**
   * Field label.
   */
  label?: React.ReactNode
  /**
   * Field name path.
   */
  name?: NamePath
  /**
   * Marks the label as required without adding a validation rule.
   * @default false
   */
  required?: boolean
  /**
   * Validation rules for this field.
   */
  rules?: FormRule[]
  /**
   * Event prop used to collect field changes.
   * @default "onChange"
   */
  trigger?: string
  /**
   * Explicit validation status for display-only items.
   */
  validateStatus?: ValidateStatus
  /**
   * Field-level validation trigger.
   */
  validateTrigger?: ValidateTrigger
  /**
   * Prop name used to pass the controlled value to the child.
   * @default "value"
   */
  valuePropName?: string
}

interface FieldEntity {
  name: NamePath
  rules: FormRule[]
  validateTrigger?: ValidateTrigger
}

interface FieldMeta {
  errors: React.ReactNode[]
  touched: boolean
  validating: boolean
}

interface FormCallbacks<Values extends Store = Store> {
  onFinish?: (values: Values) => void
  onFinishFailed?: (errorInfo: ValidateErrorInfo<Values>) => void
}

interface FormInternal<
  Values extends Store = Store,
> extends FormInstance<Values> {
  __INTERNAL__: {
    getFieldMeta: (name: NamePath) => FieldMeta
    getRegisteredNames: () => NamePath[]
    getValidateTrigger: () => ValidateTrigger
    getVersion: () => number
    isDisabled: () => boolean
    registerField: (entity: FieldEntity) => () => void
    setCallbacks: (callbacks: FormCallbacks<Values>) => void
    setDisabled: (disabled: boolean) => void
    setInitialValues: (
      values: Partial<Values> | undefined,
      init: boolean,
    ) => void
    subscribe: (listener: () => void) => () => void
    updateFieldValue: (
      name: NamePath,
      value: StoreValue,
      triggerName: string,
    ) => void
    validateField: (
      name: NamePath,
      triggerName?: string,
    ) => Promise<React.ReactNode[]>
  }
}

const FormContext = React.createContext<null | {
  form: FormInternal
  layout: NonNullable<FormProps["layout"]>
}>(null)

const DEFAULT_FIELD_META: FieldMeta = {
  errors: [],
  touched: false,
  validating: false,
}

function useForceUpdate() {
  return React.useReducer((value: number) => value + 1, 0)[1]
}

/**
 * Creates or reuses a sticker form instance.
 */
function useForm<Values extends Store = Store>(
  form?: FormInstance<Values>,
): [FormInstance<Values>] {
  const formRef = React.useRef<FormInstance<Values> | null>(null)

  if (!formRef.current) {
    formRef.current = form ?? createFormInstance<Values>()
  }

  return [formRef.current]
}

function createFormInstance<
  Values extends Store = Store,
>(): FormInstance<Values> {
  let store: Store = {}
  let initialValues: Store = {}
  let version = 0
  let disabled = false
  let callbacks: FormCallbacks<Values> = {}
  const fields = new Map<string, FieldEntity>()
  const metas = new Map<string, FieldMeta>()
  const listeners = new Set<() => void>()

  const notify = () => {
    version += 1
    for (const listener of listeners) {
      listener()
    }
  }

  const setFieldMeta = (name: NamePath, meta: Partial<FieldMeta>) => {
    const nameKey = toNameKey(name)
    metas.set(nameKey, {
      ...DEFAULT_FIELD_META,
      ...metas.get(nameKey),
      ...meta,
    })
  }

  const getFieldMeta = (name: NamePath) => ({
    ...DEFAULT_FIELD_META,
    ...metas.get(toNameKey(name)),
  })

  const validateField = async (name: NamePath, triggerName?: string) => {
    const nameKey = toNameKey(name)
    const entity = fields.get(nameKey)

    if (!entity) {
      return []
    }

    const value = getValueByNamePath(store, entity.name)
    const rules = triggerName
      ? entity.rules.filter((rule) =>
          shouldValidateByTrigger(
            rule.validateTrigger ?? entity.validateTrigger,
            triggerName,
          ),
        )
      : entity.rules

    if (rules.length === 0) {
      return getFieldMeta(entity.name).errors
    }

    setFieldMeta(entity.name, { validating: true })
    notify()

    const errors: React.ReactNode[] = []

    for (const rule of rules) {
      const error = await validateRule(rule, value, form as FormInstance)

      if (error) {
        errors.push(error)
      }
    }

    setFieldMeta(entity.name, {
      errors,
      validating: false,
    })
    notify()

    return errors
  }

  const validateFields = async (nameList?: readonly NamePath[]) => {
    const names = nameList ?? [...fields.values()].map((field) => field.name)
    const errorFields: FieldData[] = []

    for (const name of names) {
      const errors = await validateField(name)

      if (errors.length > 0) {
        errorFields.push({
          errors,
          name,
          value: getValueByNamePath(store, name),
        })
      }
    }

    if (errorFields.length > 0) {
      throw {
        errorFields,
        values: cloneStore(store) as Values,
      } satisfies ValidateErrorInfo<Values>
    }

    return cloneStore(store) as Values
  }

  const form: FormInternal<Values> = {
    __INTERNAL__: {
      getFieldMeta,
      getRegisteredNames: () => [...fields.values()].map((field) => field.name),
      getValidateTrigger: () => "onChange",
      getVersion: () => version,
      isDisabled: () => disabled,
      registerField: (entity) => {
        const nameKey = toNameKey(entity.name)
        fields.set(nameKey, entity)

        if (!metas.has(nameKey)) {
          metas.set(nameKey, DEFAULT_FIELD_META)
        }

        if (
          getValueByNamePath(store, entity.name) === undefined &&
          getValueByNamePath(initialValues, entity.name) !== undefined
        ) {
          store = setValueByNamePath(
            store,
            entity.name,
            getValueByNamePath(initialValues, entity.name),
          )
          notify()
        }

        return () => {
          fields.delete(nameKey)
        }
      },
      setCallbacks: (nextCallbacks) => {
        callbacks = nextCallbacks
      },
      setDisabled: (nextDisabled) => {
        disabled = nextDisabled
      },
      setInitialValues: (values, init) => {
        initialValues = values ? cloneStore(values) : {}

        if (init) {
          store = mergeValues(cloneStore(initialValues), store)
          notify()
        }
      },
      subscribe: (listener) => {
        listeners.add(listener)

        return () => {
          listeners.delete(listener)
        }
      },
      updateFieldValue: (name, value, triggerName) => {
        store = setValueByNamePath(store, name, value)
        setFieldMeta(name, {
          touched: true,
        })
        notify()

        void validateField(name, triggerName)
      },
      validateField,
    },
    getFieldValue: (name) => getValueByNamePath(store, name),
    getFieldsValue: (nameList) => {
      if (nameList === true) {
        return cloneStore(store) as Values
      }

      const names = nameList ?? [...fields.values()].map((field) => field.name)
      const values: Store = {}

      for (const name of names) {
        values[toNameKey(name)] = getValueByNamePath(store, name)
      }

      return values as Values
    },
    resetFields: (nameList) => {
      const names = nameList ?? [...fields.values()].map((field) => field.name)

      for (const name of names) {
        store = setValueByNamePath(
          store,
          name,
          getValueByNamePath(initialValues, name),
        )
        metas.set(toNameKey(name), DEFAULT_FIELD_META)
      }

      notify()
    },
    setFieldValue: (name, value) => {
      store = setValueByNamePath(store, name, value)
      notify()
    },
    setFields: (nextFields) => {
      for (const field of nextFields) {
        if ("value" in field) {
          store = setValueByNamePath(store, field.name, field.value)
        }

        setFieldMeta(field.name, {
          errors: field.errors,
          touched: field.touched,
          validating: field.validating,
        })
      }

      notify()
    },
    setFieldsValue: (values) => {
      store = mergeValues(store, values)
      notify()
    },
    submit: () => {
      void validateFields()
        .then((values) => {
          callbacks.onFinish?.(values)
        })
        .catch((errorInfo: ValidateErrorInfo<Values>) => {
          callbacks.onFinishFailed?.(errorInfo)
        })
    },
    validateFields,
  }

  return form
}

function FormRoot({
  children,
  className,
  disabled = false,
  form,
  initialValues,
  layout = "vertical",
  onFinish,
  onFinishFailed,
  validateTrigger = "onChange",
  ...props
}: FormProps) {
  const [formInstance] = useForm(form)
  const internalForm = formInstance as FormInternal
  const mountedRef = React.useRef(false)
  const forceUpdate = useForceUpdate()

  React.useEffect(
    () => internalForm.__INTERNAL__.subscribe(forceUpdate),
    [forceUpdate, internalForm],
  )

  internalForm.__INTERNAL__.setCallbacks({ onFinish, onFinishFailed })
  internalForm.__INTERNAL__.setDisabled(disabled)
  internalForm.__INTERNAL__.getValidateTrigger = () => validateTrigger

  React.useEffect(() => {
    internalForm.__INTERNAL__.setInitialValues(
      initialValues,
      !mountedRef.current,
    )
    mountedRef.current = true
  }, [initialValues, internalForm])

  return (
    <FormContext.Provider value={{ form: internalForm, layout }}>
      <form
        className={cn(
          "text-ink",
          layout === "inline"
            ? "flex flex-wrap items-start gap-3"
            : "grid gap-4",
          className,
        )}
        data-disabled={disabled}
        data-layout={layout}
        data-slot="form"
        noValidate
        onSubmit={(event) => {
          event.preventDefault()
          internalForm.submit()
        }}
        {...props}
      >
        {children}
      </form>
    </FormContext.Provider>
  )
}

function FormItem({
  children,
  className,
  extra,
  help,
  label,
  name,
  required = false,
  rules = [],
  trigger = "onChange",
  validateStatus,
  validateTrigger,
  valuePropName = "value",
  ...props
}: FormItemProps) {
  const context = React.useContext(FormContext)

  if (!context) {
    throw new Error("Form.Item must be used inside Form.")
  }

  const { form, layout } = context
  const nameKey = name ? toNameKey(name) : undefined
  const fieldId = nameKey ? `form-${sanitizeId(nameKey)}` : undefined
  const storeVersion = React.useSyncExternalStore(
    form.__INTERNAL__.subscribe,
    form.__INTERNAL__.getVersion,
    () => 0,
  )

  React.useEffect(() => {
    if (!name) {
      return
    }

    return form.__INTERNAL__.registerField({
      name,
      rules,
      validateTrigger:
        validateTrigger ?? form.__INTERNAL__.getValidateTrigger(),
    })
  }, [form, name, nameKey, rules, validateTrigger])

  const meta = name ? form.__INTERNAL__.getFieldMeta(name) : DEFAULT_FIELD_META
  const status =
    validateStatus ??
    (meta.validating
      ? "validating"
      : meta.errors.length > 0
        ? "error"
        : undefined)
  const helpNode = help ?? meta.errors[0]
  const describedBy = [
    helpNode && fieldId ? `${fieldId}-help` : undefined,
    extra && fieldId ? `${fieldId}-extra` : undefined,
  ]
    .filter(Boolean)
    .join(" ")
  const isRequired = required || rules.some((rule) => Boolean(rule.required))
  const control = getControlledChild({
    child: children,
    describedBy,
    disabled: form.__INTERNAL__.isDisabled(),
    fieldId,
    form,
    name,
    status,
    storeVersion,
    trigger,
    validateTrigger,
    valuePropName,
  })

  return (
    <div
      className={cn(
        "group/form-item grid min-w-0 gap-2",
        layout === "horizontal" && "md:flex md:items-start md:gap-4",
        layout === "inline" && "min-w-52 flex-1",
        className,
      )}
      data-has-error={status === "error"}
      data-name={nameKey}
      data-slot="form-item"
      data-status={status}
      {...props}
    >
      {label ? (
        <Label
          className={cn(
            "max-w-full flex-wrap pt-1 leading-5 wrap-break-word",
            layout === "horizontal" && "md:w-32 md:shrink-0",
          )}
          data-slot="form-item-label"
          htmlFor={fieldId}
          tone={status === "error" ? "danger" : "default"}
        >
          {label}
          {isRequired ? (
            <LabelMarker data-slot="form-item-required" tone="danger">
              required
            </LabelMarker>
          ) : null}
        </Label>
      ) : null}
      <div
        className={cn(
          "grid max-w-full min-w-0 gap-1.5 *:max-w-full *:min-w-0",
          layout === "horizontal" && "md:flex-1",
        )}
        data-slot="form-item-control"
      >
        {control}
        {helpNode ? (
          <div
            className={cn(
              "m-0 min-w-0 text-xs leading-5 font-bold wrap-break-word",
              status === "error" ? "text-text-danger" : "text-text-muted",
            )}
            data-slot="form-item-help"
            id={fieldId ? `${fieldId}-help` : undefined}
            role={status === "error" ? "alert" : undefined}
          >
            {helpNode}
          </div>
        ) : null}
        {extra ? (
          <div
            className="text-text-subtle m-0 min-w-0 text-xs leading-5 font-medium wrap-break-word"
            data-slot="form-item-extra"
            id={fieldId ? `${fieldId}-extra` : undefined}
          >
            {extra}
          </div>
        ) : null}
      </div>
    </div>
  )
}

function getControlledChild({
  child,
  describedBy,
  disabled,
  fieldId,
  form,
  name,
  status,
  trigger,
  validateTrigger,
  valuePropName,
}: {
  child: React.ReactNode
  describedBy: string
  disabled: boolean
  fieldId?: string
  form: FormInternal
  name?: NamePath
  status?: ValidateStatus
  storeVersion: number
  trigger: string
  validateTrigger?: ValidateTrigger
  valuePropName: string
}) {
  if (!name || !React.isValidElement(child)) {
    return child
  }

  const childProps = child.props as Record<string, unknown>
  const value = form.getFieldValue(name)
  const nextProps: Record<string, unknown> = {
    "aria-describedby": describedBy || undefined,
    "aria-invalid": status === "error" || undefined,
    "data-status": status,
    id: childProps.id ?? fieldId,
    [valuePropName]: value ?? getEmptyControlValue(valuePropName),
  }

  if (disabled && childProps.disabled === undefined) {
    nextProps.disabled = true
  }

  const originalTrigger = childProps[trigger]
  nextProps[trigger] = (...args: unknown[]) => {
    if (typeof originalTrigger === "function") {
      originalTrigger(...args)
    }

    form.__INTERNAL__.updateFieldValue(
      name,
      getValueFromEvent(valuePropName, args),
      trigger,
    )
  }

  const triggers = toTriggerArray(
    validateTrigger ?? form.__INTERNAL__.getValidateTrigger(),
  )

  for (const itemTrigger of triggers) {
    if (itemTrigger === trigger) {
      continue
    }

    const originalHandler = childProps[itemTrigger]
    nextProps[itemTrigger] = (...args: unknown[]) => {
      if (typeof originalHandler === "function") {
        originalHandler(...args)
      }

      void form.__INTERNAL__.validateField(name, itemTrigger)
    }
  }

  return React.cloneElement(child, nextProps)
}

function validateRule(
  rule: FormRule,
  value: StoreValue,
  form: FormInstance,
): Promise<React.ReactNode | undefined> {
  return Promise.resolve().then(async () => {
    const message = rule.message

    if (rule.required && isEmptyValue(value, rule.whitespace ?? false)) {
      return message ?? "This field is required."
    }

    if (isEmptyValue(value, false)) {
      return undefined
    }

    if (rule.type && !matchesType(rule.type, value)) {
      return message ?? `This field must be a valid ${rule.type}.`
    }

    if (
      rule.pattern &&
      typeof value === "string" &&
      !rule.pattern.test(value)
    ) {
      return message ?? "This field does not match the required pattern."
    }

    const size = getComparableSize(value)

    if (rule.len !== undefined && size !== undefined && size !== rule.len) {
      return message ?? `This field must be exactly ${rule.len}.`
    }

    if (rule.min !== undefined && size !== undefined && size < rule.min) {
      return message ?? `This field must be at least ${rule.min}.`
    }

    if (rule.max !== undefined && size !== undefined && size > rule.max) {
      return message ?? `This field must be at most ${rule.max}.`
    }

    if (rule.validator) {
      try {
        await rule.validator(rule, value, form)
      } catch (error) {
        return message ?? getValidatorErrorMessage(error)
      }
    }

    return undefined
  })
}

function isEmptyValue(value: StoreValue, trimWhitespace: boolean) {
  if (value === undefined || value === null) {
    return true
  }

  if (typeof value === "string") {
    return trimWhitespace ? value.trim().length === 0 : value.length === 0
  }

  if (Array.isArray(value)) {
    return value.length === 0
  }

  return false
}

function matchesType(type: NonNullable<FormRule["type"]>, value: StoreValue) {
  if (type === "array") {
    return Array.isArray(value)
  }

  if (type === "email") {
    return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  }

  return typeof value === type
}

function getComparableSize(value: StoreValue) {
  if (typeof value === "number") {
    return value
  }

  if (typeof value === "string" || Array.isArray(value)) {
    return value.length
  }

  return undefined
}

function getValidatorErrorMessage(error: unknown) {
  if (React.isValidElement(error)) {
    return error
  }

  if (error instanceof Error) {
    return error.message
  }

  if (typeof error === "string") {
    return error
  }

  return "This field is invalid."
}

function getValueFromEvent(valuePropName: string, args: unknown[]) {
  const [eventOrValue] = args

  if (isChangeEvent(eventOrValue)) {
    return valuePropName === "checked"
      ? eventOrValue.target.checked
      : eventOrValue.target.value
  }

  return eventOrValue
}

function isChangeEvent(
  value: unknown,
): value is { target: { checked?: boolean; value?: unknown } } {
  return Boolean(
    value &&
    typeof value === "object" &&
    "target" in value &&
    value.target &&
    typeof value.target === "object",
  )
}

function getEmptyControlValue(valuePropName: string) {
  return valuePropName === "checked" ? false : ""
}

function toNamePath(name: NamePath): NamePathPart[] {
  return typeof name === "object" ? Array.from(name) : [name]
}

function toNameKey(name: NamePath) {
  return toNamePath(name).join(".")
}

function sanitizeId(value: string) {
  return value.replace(/[^a-zA-Z0-9_-]+/g, "-")
}

function getValueByNamePath(values: Store, name: NamePath) {
  return toNamePath(name).reduce<StoreValue>((current, path) => {
    if (!isRecord(current)) {
      return undefined
    }

    return current[path]
  }, values)
}

function setValueByNamePath(values: Store, name: NamePath, value: StoreValue) {
  const namePath = toNamePath(name)
  const nextValues = { ...values }
  let current: Store = nextValues

  namePath.forEach((path, index) => {
    if (index === namePath.length - 1) {
      current[path] = value
      return
    }

    const nextValue = current[path]
    const nextObject = isRecord(nextValue) ? { ...nextValue } : {}
    current[path] = nextObject
    current = nextObject
  })

  return nextValues
}

function mergeValues(base: Store, patch: Store) {
  const nextValues = { ...base }

  for (const [key, value] of Object.entries(patch)) {
    const baseValue = nextValues[key]

    nextValues[key] =
      isRecord(value) && isRecord(baseValue)
        ? mergeValues(baseValue, value)
        : value
  }

  return nextValues
}

function cloneStore(values: Store) {
  return mergeValues({}, values)
}

function isRecord(value: unknown): value is Store {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value)
}

function shouldValidateByTrigger(
  validateTrigger: undefined | ValidateTrigger,
  triggerName: string,
) {
  if (validateTrigger === false) {
    return false
  }

  const triggers = toTriggerArray(validateTrigger ?? "onChange")

  return triggers.includes(triggerName)
}

function toTriggerArray(validateTrigger: undefined | ValidateTrigger) {
  if (validateTrigger === false || validateTrigger === undefined) {
    return []
  }

  return Array.isArray(validateTrigger) ? validateTrigger : [validateTrigger]
}

const Form = Object.assign(FormRoot, {
  Item: FormItem,
  useForm,
})

export { Form, useForm }
export type {
  FieldData,
  FormInstance,
  FormItemProps,
  FormProps,
  FormRule,
  NamePath,
  ValidateErrorInfo,
  ValidateStatus,
  ValidateTrigger,
}
