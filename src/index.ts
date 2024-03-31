import { Input as InputRoot, inputVariants } from "./components/ui/input"
import { InputPassword } from "./components/ui/input-password"

const Input = Object.assign(InputRoot, {
  Password: InputPassword,
})

export { Button, buttonVariants } from "./components/ui/button"
export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  cardVariants,
} from "./components/ui/card"
export { Form, useForm } from "./components/ui/form"
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
} from "./components/ui/form"
export { Input, InputPassword, inputVariants }
export {
  Label,
  LabelDescription,
  LabelMarker,
  labelTones,
} from "./components/ui/label"
export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  selectVariants,
} from "./components/ui/select"
export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table"
export { Tag, tagVariants } from "./components/ui/tag"
export { Textarea, textareaVariants } from "./components/ui/textarea"
