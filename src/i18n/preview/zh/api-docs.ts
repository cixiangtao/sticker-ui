const ZH_PREVIEW_API_DOC_TRANSLATIONS: Record<string, string> = {
  "api.alert.description": "用于状态消息和反馈的易读贴纸提示。",
  "api.alert.components.Alert.description":
    "用于状态消息、校验摘要和提示备注的贴纸提示表面。",
  "api.alert.components.Alert.props.description": "贴纸提示根元素的 props。",
  "api.alert.components.Alert.props.members.size.description":
    "控制提示内边距和圆角。",
  "api.alert.components.Alert.props.members.tone.description":
    "控制提示的语义纸张色调。",
  "api.alert.components.Alert.props.members.variant.description":
    "控制提示表面结构和强调程度。",
  "api.alert.components.Alert.props.remarks":
    "继承原生 div 属性，并加入语义色调、尺寸和结构变体。",
  "api.alert.components.AlertDescription.description": "贴纸提示正文。",
  "api.alert.components.AlertTitle.description": "贴纸提示标题。",
  "api.alert.exports.Alert.description":
    "用于状态消息、校验摘要和提示备注的贴纸提示表面。",
  "api.alert.exports.AlertDescription.description": "贴纸提示正文。",
  "api.alert.exports.AlertProps.description": "贴纸提示根元素的 props。",
  "api.alert.exports.AlertProps.remarks":
    "继承原生 div 属性，并加入语义色调、尺寸和结构变体。",
  "api.alert.exports.AlertTitle.description": "贴纸提示标题。",
  "api.alert.exports.alertVariants.description":
    "根据色调和结构变体生成贴纸提示的 className。",
  "api.alert.types.AlertProps.description": "贴纸提示根元素的 props。",
  "api.alert.types.AlertProps.members.size.description":
    "控制提示内边距和圆角。",
  "api.alert.types.AlertProps.members.tone.description":
    "控制提示的语义纸张色调。",
  "api.alert.types.AlertProps.members.variant.description":
    "控制提示表面结构和强调程度。",
  "api.alert.types.AlertProps.remarks":
    "继承原生 div 属性，并加入语义色调、尺寸和结构变体。",
  "api.alert.variants.alertVariants.description":
    "根据色调和结构变体生成贴纸提示的 className。",
  "api.button.description": "带厚实墨色边框的触感 handbook 贴纸按钮。",
  "api.button.components.Button.props.description": "贴纸按钮根元素的 props。",
  "api.button.components.Button.props.members.asChild.description":
    "将按钮样式和状态 props 渲染到唯一的子元素上。",
  "api.button.components.Button.props.members.color.description":
    "控制按钮的语义颜色。",
  "api.button.components.Button.props.members.loading.description":
    "显示加载指示器，并在等待期间禁用按钮。",
  "api.button.components.Button.props.members.size.description":
    "控制按钮尺寸和内边距。",
  "api.button.components.Button.props.members.variant.description":
    "控制按钮的视觉结构和强调程度。",
  "api.button.components.Button.props.remarks":
    "继承原生按钮属性，并加入贴纸结构、颜色、尺寸和加载状态。",
  "api.button.exports.buttonVariants.description":
    "根据结构、颜色和尺寸变体生成贴纸按钮的 className。",
  "api.button.types.ButtonProps.description": "贴纸按钮根元素的 props。",
  "api.button.types.ButtonProps.members.asChild.description":
    "将按钮样式和状态 props 渲染到唯一的子元素上。",
  "api.button.types.ButtonProps.members.color.description":
    "控制按钮的语义颜色。",
  "api.button.types.ButtonProps.members.loading.description":
    "显示加载指示器，并在等待期间禁用按钮。",
  "api.button.types.ButtonProps.members.size.description":
    "控制按钮尺寸和内边距。",
  "api.button.types.ButtonProps.members.variant.description":
    "控制按钮的视觉结构和强调程度。",
  "api.button.types.ButtonProps.remarks":
    "继承原生按钮属性，并加入贴纸结构、颜色、尺寸和加载状态。",
  "api.button.variants.buttonVariants.description":
    "根据结构、颜色和尺寸变体生成贴纸按钮的 className。",
  "api.card.description":
    "用于卡片、面板和内容分组的可组合 handbook 贴纸表面。",
  "api.card.components.Card.props.description": "贴纸卡片根元素的 props。",
  "api.card.components.Card.props.members.as.description":
    "控制卡片渲染的语义根元素。",
  "api.card.components.Card.props.members.asChild.description":
    "将卡片样式和状态 props 渲染到唯一的子元素上。",
  "api.card.components.Card.props.members.interactive.description":
    "为可点击卡片组合启用触感 hover 和按压状态。",
  "api.card.components.Card.props.members.padding.description":
    "控制卡片留白，并让组合式插槽保持同一套间距。",
  "api.card.components.Card.props.members.variant.description":
    "控制卡片表面的结构和强调程度。",
  "api.card.components.Card.props.remarks":
    "继承原生 HTML 属性，并加入语义元素和交互状态。",
  "api.card.components.CardHeader.props.description":
    "贴纸卡片标题栏的 props。",
  "api.card.components.CardHeader.props.members.decoration.description":
    "渲染在标题栏末尾的装饰内容。",
  "api.card.components.CardHeader.props.members.decoration.remarks":
    "传入 `true` 渲染默认标题栏圆点，也可以传入自定义内容。",
  "api.card.components.CardHeader.props.members.divider.description":
    "控制标题栏和卡片主体之间的分隔线。",
  "api.card.components.CardHeader.props.members.dividerInset.description":
    "控制标题栏分隔线的左右缩进。",
  "api.card.exports.cardVariants.description":
    "根据结构变体生成贴纸卡片的 className。",
  "api.card.types.CardHeaderProps.description": "贴纸卡片标题栏的 props。",
  "api.card.types.CardHeaderProps.members.decoration.description":
    "渲染在标题栏末尾的装饰内容。",
  "api.card.types.CardHeaderProps.members.decoration.remarks":
    "传入 `true` 渲染默认标题栏圆点，也可以传入自定义内容。",
  "api.card.types.CardHeaderProps.members.divider.description":
    "控制标题栏和卡片主体之间的分隔线。",
  "api.card.types.CardHeaderProps.members.dividerInset.description":
    "控制标题栏分隔线的左右缩进。",
  "api.card.types.CardProps.description": "贴纸卡片根元素的 props。",
  "api.card.types.CardProps.members.as.description":
    "控制卡片渲染的语义根元素。",
  "api.card.types.CardProps.members.asChild.description":
    "将卡片样式和状态 props 渲染到唯一的子元素上。",
  "api.card.types.CardProps.members.interactive.description":
    "为可点击卡片组合启用触感 hover 和按压状态。",
  "api.card.types.CardProps.members.padding.description":
    "控制卡片留白，并让组合式插槽保持同一套间距。",
  "api.card.types.CardProps.members.variant.description":
    "控制卡片表面的结构和强调程度。",
  "api.card.types.CardProps.remarks":
    "继承原生 HTML 属性，并加入语义元素和交互状态。",
  "api.card.variants.cardVariants.description":
    "根据结构变体生成贴纸卡片的 className。",
  "api.checkbox.description": "带贴纸选中和不确定状态的 Radix 复选框。",
  "api.checkbox.components.Checkbox.description":
    "由 Radix Checkbox 驱动的贴纸复选框。",
  "api.checkbox.components.Checkbox.props.description":
    "贴纸复选框根元素的 props。",
  "api.checkbox.components.Checkbox.props.members.className.description":
    "复选框根元素的自定义 className。",
  "api.checkbox.components.Checkbox.props.members.size.description":
    "控制复选框方块、图标和圆角尺寸。",
  "api.checkbox.components.Checkbox.props.members.tone.description":
    "控制语义纸张色调。",
  "api.checkbox.components.Checkbox.props.members.variant.description":
    "控制复选框边框和填充强调程度。",
  "api.checkbox.components.Checkbox.props.remarks":
    "包裹 Radix Checkbox.Root，并加入贴纸尺寸、色调和变体 props。",
  "api.checkbox.exports.Checkbox.description":
    "由 Radix Checkbox 驱动的贴纸复选框。",
  "api.checkbox.exports.CheckboxProps.description":
    "贴纸复选框根元素的 props。",
  "api.checkbox.exports.CheckboxProps.remarks":
    "包裹 Radix Checkbox.Root，并加入贴纸尺寸、色调和变体 props。",
  "api.checkbox.exports.checkboxVariants.description":
    "根据结构、色调和尺寸变体生成贴纸复选框的 className。",
  "api.checkbox.types.CheckboxProps.description": "贴纸复选框根元素的 props。",
  "api.checkbox.types.CheckboxProps.members.className.description":
    "复选框根元素的自定义 className。",
  "api.checkbox.types.CheckboxProps.members.size.description":
    "控制复选框方块、图标和圆角尺寸。",
  "api.checkbox.types.CheckboxProps.members.tone.description":
    "控制语义纸张色调。",
  "api.checkbox.types.CheckboxProps.members.variant.description":
    "控制复选框边框和填充强调程度。",
  "api.checkbox.types.CheckboxProps.remarks":
    "包裹 Radix Checkbox.Root，并加入贴纸尺寸、色调和变体 props。",
  "api.label.description": "带可选贴纸标记的可访问表单标题。",
  "api.label.components.Label.props.description": "贴纸标签根元素的 props。",
  "api.label.components.Label.props.members.optional.description":
    "在标签内容后显示可选标记。",
  "api.label.components.Label.props.members.required.description":
    "在标签内容后显示必填标记。",
  "api.label.components.Label.props.members.requiredMark.description":
    "控制必填标记的渲染样式。",
  "api.label.components.Label.props.members.size.description":
    "控制标签文字尺寸。",
  "api.label.components.Label.props.members.tone.description":
    "控制标签文字色调和必填标记颜色。",
  "api.label.components.Label.props.remarks":
    "继承原生 label 属性，并加入贴纸变体。",
  "api.label.components.LabelMarker.props.description":
    "内联标签标记的 props。",
  "api.label.components.LabelMarker.props.members.tone.description":
    "控制标记纸张颜色。",
  "api.label.components.LabelMarker.props.remarks":
    "继承原生 span 属性，并加入贴纸色调变体。",
  "api.label.exports.labelTones.description":
    "根据尺寸和色调变体生成贴纸标签的 className。",
  "api.label.types.LabelMarkerProps.description": "内联标签标记的 props。",
  "api.label.types.LabelMarkerProps.members.tone.description":
    "控制标记纸张颜色。",
  "api.label.types.LabelMarkerProps.remarks":
    "继承原生 span 属性，并加入贴纸色调变体。",
  "api.label.types.LabelProps.description": "贴纸标签根元素的 props。",
  "api.label.types.LabelProps.members.optional.description":
    "在标签内容后显示可选标记。",
  "api.label.types.LabelProps.members.required.description":
    "在标签内容后显示必填标记。",
  "api.label.types.LabelProps.members.requiredMark.description":
    "控制必填标记的渲染样式。",
  "api.label.types.LabelProps.members.size.description": "控制标签文字尺寸。",
  "api.label.types.LabelProps.members.tone.description":
    "控制标签文字色调和必填标记颜色。",
  "api.label.types.LabelProps.remarks": "继承原生 label 属性，并加入贴纸变体。",
  "api.label.variants.labelTones.description":
    "根据尺寸和色调变体生成贴纸标签的 className。",
  "api.label.variants.markerTones.description":
    "根据色调变体生成内联标记的 className。",
  "api.input.description": "带有厚实贴纸边框和语义字段状态的原生表单输入框。",
  "api.input.components.Input.props.description": "贴纸输入框元素的 props。",
  "api.input.components.Input.props.members.onChange.description":
    "输入框值变化时调用。",
  "api.input.components.Input.props.members.onChange.remarks":
    "第一个参数是新的字符串值，第二个参数是原生 change 事件。",
  "api.input.components.Input.props.members.size.description":
    "控制输入框高度、圆角和文字尺寸。",
  "api.input.components.Input.props.members.tone.description":
    "控制输入框的语义纸张色调。",
  "api.input.components.Input.props.members.type.description":
    "控制原生文本输入类型。",
  "api.input.components.Input.props.members.variant.description":
    "控制输入框边框和填充的强调程度。",
  "api.input.components.Input.props.remarks":
    "继承原生 input 属性，但 `onChange`、非文本输入类型和数字形式的 HTML `size` 属性由贴纸组件 API 替代。",
  "api.input.exports.inputVariants.description":
    "根据结构、色调和尺寸变体生成贴纸输入框的 className。",
  "api.input.types.InputProps.description": "贴纸输入框元素的 props。",
  "api.input.types.InputProps.members.onChange.description":
    "输入框值变化时调用。",
  "api.input.types.InputProps.members.onChange.remarks":
    "第一个参数是新的字符串值，第二个参数是原生 change 事件。",
  "api.input.types.InputProps.members.size.description":
    "控制输入框高度、圆角和文字尺寸。",
  "api.input.types.InputProps.members.tone.description":
    "控制输入框的语义纸张色调。",
  "api.input.types.InputProps.members.type.description":
    "控制原生文本输入类型。",
  "api.input.types.InputProps.members.variant.description":
    "控制输入框边框和填充的强调程度。",
  "api.input.types.InputProps.remarks":
    "继承原生 input 属性，但 `onChange`、非文本输入类型和数字形式的 HTML `size` 属性由贴纸组件 API 替代。",
  "api.input.variants.inputVariants.description":
    "根据结构、色调和尺寸变体生成贴纸输入框的 className。",
  "api.input-password.description": "带贴纸外框和显示隐藏切换的密码字段。",
  "api.input-password.components.InputPassword.props.description":
    "贴纸密码输入框元素的 props。",
  "api.input-password.components.InputPassword.props.members.defaultVisible.description":
    "设置非受控密码可见状态的初始值。",
  "api.input-password.components.InputPassword.props.members.hideLabel.description":
    "密码隐藏图标按钮状态的可访问标签。",
  "api.input-password.components.InputPassword.props.members.onChange.description":
    "密码值变化时调用。",
  "api.input-password.components.InputPassword.props.members.onChange.remarks":
    "第一个参数是新的字符串值，第二个参数是原生 change 事件。",
  "api.input-password.components.InputPassword.props.members.onVisibleChange.description":
    "密码可见状态变化时调用。",
  "api.input-password.components.InputPassword.props.members.showLabel.description":
    "密码显示图标按钮状态的可访问标签。",
  "api.input-password.components.InputPassword.props.members.size.description":
    "控制输入框高度、圆角和文字尺寸。",
  "api.input-password.components.InputPassword.props.members.visible.description":
    "受控密码可见状态。",
  "api.input-password.components.InputPassword.props.remarks":
    "继承贴纸输入框属性，但 `onChange`、原生 `type` 和数字形式的 HTML `size` 属性由密码输入框专用贴纸 API 替代。",
  "api.input-password.types.InputPasswordProps.description":
    "贴纸密码输入框元素的 props。",
  "api.input-password.types.InputPasswordProps.members.defaultVisible.description":
    "设置非受控密码可见状态的初始值。",
  "api.input-password.types.InputPasswordProps.members.hideLabel.description":
    "密码隐藏图标按钮状态的可访问标签。",
  "api.input-password.types.InputPasswordProps.members.onChange.description":
    "密码值变化时调用。",
  "api.input-password.types.InputPasswordProps.members.onChange.remarks":
    "第一个参数是新的字符串值，第二个参数是原生 change 事件。",
  "api.input-password.types.InputPasswordProps.members.onVisibleChange.description":
    "密码可见状态变化时调用。",
  "api.input-password.types.InputPasswordProps.members.showLabel.description":
    "密码显示图标按钮状态的可访问标签。",
  "api.input-password.types.InputPasswordProps.members.size.description":
    "控制输入框高度、圆角和文字尺寸。",
  "api.input-password.types.InputPasswordProps.members.visible.description":
    "受控密码可见状态。",
  "api.input-password.types.InputPasswordProps.remarks":
    "继承贴纸输入框属性，但 `onChange`、原生 `type` 和数字形式的 HTML `size` 属性由密码输入框专用贴纸 API 替代。",
  "api.textarea.description": "带有厚实贴纸边框和语义字段状态的原生多行字段。",
  "api.textarea.components.Textarea.props.description":
    "贴纸多行输入框元素的 props。",
  "api.textarea.components.Textarea.props.members.onChange.description":
    "多行输入框值变化时调用。",
  "api.textarea.components.Textarea.props.members.onChange.remarks":
    "第一个参数是新的字符串值，第二个参数是原生 change 事件。",
  "api.textarea.components.Textarea.props.members.size.description":
    "控制多行输入框最小高度、圆角、内边距和文字尺寸。",
  "api.textarea.components.Textarea.props.members.tone.description":
    "控制多行输入框的语义纸张色调。",
  "api.textarea.components.Textarea.props.members.variant.description":
    "控制多行输入框边框和填充的强调程度。",
  "api.textarea.components.Textarea.props.remarks":
    "继承原生 textarea 属性，但 `onChange` 和数字形式的 HTML `size` 属性由贴纸组件 API 替代。",
  "api.textarea.exports.textareaVariants.description":
    "复用输入框变体，并叠加多行输入尺寸，生成贴纸多行输入框的 className。",
  "api.textarea.types.TextareaProps.description":
    "贴纸多行输入框元素的 props。",
  "api.textarea.types.TextareaProps.members.onChange.description":
    "多行输入框值变化时调用。",
  "api.textarea.types.TextareaProps.members.onChange.remarks":
    "第一个参数是新的字符串值，第二个参数是原生 change 事件。",
  "api.textarea.types.TextareaProps.members.size.description":
    "控制多行输入框最小高度、圆角、内边距和文字尺寸。",
  "api.textarea.types.TextareaProps.members.tone.description":
    "控制多行输入框的语义纸张色调。",
  "api.textarea.types.TextareaProps.members.variant.description":
    "控制多行输入框边框和填充的强调程度。",
  "api.textarea.types.TextareaProps.remarks":
    "继承原生 textarea 属性，但 `onChange` 和数字形式的 HTML `size` 属性由贴纸组件 API 替代。",
  "api.textarea.variants.textareaVariants.description":
    "复用输入框变体，并叠加多行输入尺寸，生成贴纸多行输入框的 className。",
  "api.select.description":
    "由 Radix 驱动的选择框，包含贴纸风格触发器、菜单和选项状态。",
  "api.select.components.Select.description":
    "由 Radix Select 驱动的贴纸选择框根组件。",
  "api.select.components.Select.props.description":
    "贴纸选择框根组件的 props。",
  "api.select.components.Select.props.members.aria-describedby.description":
    "在 Form.Item 中使用时描述触发器。",
  "api.select.components.Select.props.members.aria-invalid.description":
    "在 Form.Item 中使用时标记触发器为无效状态。",
  "api.select.components.Select.props.members.id.description":
    "与 Label 搭配使用时，为触发器提供稳定 id。",
  "api.select.components.Select.props.members.onChange.description":
    "选择值变化时调用。",
  "api.select.components.Select.props.members.onChange.remarks":
    "接收新的字符串值。该回调会镜像项目表单触发约定。",
  "api.select.components.Select.props.members.onValueChange.description":
    "选择值变化时调用。",
  "api.select.components.Select.props.members.size.description":
    "控制选择框触发器高度、圆角、选项间距和文字尺寸。",
  "api.select.components.Select.props.members.tone.description":
    "控制选择框的语义纸张色调。",
  "api.select.components.Select.props.members.variant.description":
    "控制选择框触发器边框和填充的强调程度。",
  "api.select.components.Select.props.remarks":
    "封装 Radix Select.Root，并保留 `onChange(value)` 作为适配 Form.Item 的 `onValueChange` 别名。",
  "api.select.components.SelectContent.description":
    "通过 Portal 渲染的贴纸选择框下拉内容。",
  "api.select.components.SelectGroup.description": "组合相关选择项。",
  "api.select.components.SelectItem.description": "可选择的贴纸菜单项。",
  "api.select.components.SelectLabel.description": "标记一组选项。",
  "api.select.components.SelectScrollDownButton.description":
    "当选项溢出时向下滚动下拉内容。",
  "api.select.components.SelectScrollUpButton.description":
    "当选项溢出时向上滚动下拉内容。",
  "api.select.components.SelectSeparator.description": "分隔选择项分组。",
  "api.select.components.SelectTrigger.description": "打开贴纸选择框内容。",
  "api.select.components.SelectValue.description":
    "显示当前已选选项文本或占位内容。",
  "api.select.exports.Select.description":
    "由 Radix Select 驱动的贴纸选择框根组件。",
  "api.select.exports.SelectContent.description":
    "通过 Portal 渲染的贴纸选择框下拉内容。",
  "api.select.exports.SelectGroup.description": "组合相关选择项。",
  "api.select.exports.SelectItem.description": "可选择的贴纸菜单项。",
  "api.select.exports.SelectLabel.description": "标记一组选项。",
  "api.select.exports.SelectScrollDownButton.description":
    "当选项溢出时向下滚动下拉内容。",
  "api.select.exports.SelectScrollUpButton.description":
    "当选项溢出时向上滚动下拉内容。",
  "api.select.exports.SelectSeparator.description": "分隔选择项分组。",
  "api.select.exports.SelectTrigger.description": "打开贴纸选择框内容。",
  "api.select.exports.SelectValue.description":
    "显示当前已选选项文本或占位内容。",
  "api.select.exports.selectVariants.description":
    "基于输入框变体与 Radix 选择框状态，生成贴纸选择框触发器的 className。",
  "api.select.types.SelectProps.description": "贴纸选择框根组件的 props。",
  "api.select.types.SelectProps.members.aria-describedby.description":
    "在 Form.Item 中使用时描述触发器。",
  "api.select.types.SelectProps.members.aria-invalid.description":
    "在 Form.Item 中使用时标记触发器为无效状态。",
  "api.select.types.SelectProps.members.id.description":
    "与 Label 搭配使用时，为触发器提供稳定 id。",
  "api.select.types.SelectProps.members.onChange.description":
    "选择值变化时调用。",
  "api.select.types.SelectProps.members.onChange.remarks":
    "接收新的字符串值。该回调会镜像项目表单触发约定。",
  "api.select.types.SelectProps.members.onValueChange.description":
    "选择值变化时调用。",
  "api.select.types.SelectProps.members.size.description":
    "控制选择框触发器高度、圆角、选项间距和文字尺寸。",
  "api.select.types.SelectProps.members.tone.description":
    "控制选择框的语义纸张色调。",
  "api.select.types.SelectProps.members.variant.description":
    "控制选择框触发器边框和填充的强调程度。",
  "api.select.types.SelectProps.remarks":
    "封装 Radix Select.Root，并保留 `onChange(value)` 作为适配 Form.Item 的 `onValueChange` 别名。",
  "api.radio.description": "带触感贴纸选项和选中状态的 Radix 单选组。",
  "api.radio.components.RadioGroup.description":
    "由 Radix Radio Group 驱动的贴纸单选组。",
  "api.radio.components.RadioGroup.props.description":
    "贴纸单选组根元素的 props。",
  "api.radio.components.RadioGroup.props.members.className.description":
    "单选组根元素的自定义 className。",
  "api.radio.components.RadioGroup.props.members.onChange.description":
    "选中值变化时调用。",
  "api.radio.components.RadioGroup.props.members.onChange.remarks":
    "接收下一个字符串值，保持与项目表单触发器约定一致。",
  "api.radio.components.RadioGroup.props.members.onValueChange.description":
    "选中值变化时调用。",
  "api.radio.components.RadioGroup.props.members.size.description":
    "控制子项和指示点尺寸。",
  "api.radio.components.RadioGroup.props.members.tone.description":
    "控制子项的语义纸张色调。",
  "api.radio.components.RadioGroup.props.members.variant.description":
    "控制子项边框和填充强调程度。",
  "api.radio.components.RadioGroup.props.remarks":
    "封装 Radix RadioGroup.Root，并保留 `onChange(value)` 作为适配 Form.Item 的 `onValueChange` 别名。",
  "api.radio.components.RadioGroupItem.description": "可选择的贴纸单选项。",
  "api.radio.components.RadioGroupItem.props.description":
    "贴纸单选项的 props。",
  "api.radio.components.RadioGroupItem.props.members.className.description":
    "单选项根元素的自定义 className。",
  "api.radio.components.RadioGroupItem.props.members.size.description":
    "控制单选项和圆点尺寸。",
  "api.radio.components.RadioGroupItem.props.members.tone.description":
    "控制语义纸张色调。",
  "api.radio.components.RadioGroupItem.props.members.variant.description":
    "控制单选项边框和填充强调程度。",
  "api.radio.components.RadioGroupItem.props.remarks":
    "包裹 Radix RadioGroup.Item，并可继承 RadioGroup 的视觉变体。",
  "api.radio.exports.RadioGroup.description":
    "由 Radix Radio Group 驱动的贴纸单选组。",
  "api.radio.exports.RadioGroupItem.description": "可选择的贴纸单选项。",
  "api.radio.exports.RadioGroupItemProps.description": "贴纸单选项的 props。",
  "api.radio.exports.RadioGroupItemProps.remarks":
    "包裹 Radix RadioGroup.Item，并可继承 RadioGroup 的视觉变体。",
  "api.radio.exports.RadioGroupProps.description": "贴纸单选组根元素的 props。",
  "api.radio.exports.RadioGroupProps.remarks":
    "封装 Radix RadioGroup.Root，并保留 `onChange(value)` 作为适配 Form.Item 的 `onValueChange` 别名。",
  "api.radio.exports.radioVariants.description":
    "根据结构、色调和尺寸变体生成贴纸单选项的 className。",
  "api.radio.types.RadioGroupItemProps.description": "贴纸单选项的 props。",
  "api.radio.types.RadioGroupItemProps.members.className.description":
    "单选项根元素的自定义 className。",
  "api.radio.types.RadioGroupItemProps.members.size.description":
    "控制单选项和圆点尺寸。",
  "api.radio.types.RadioGroupItemProps.members.tone.description":
    "控制语义纸张色调。",
  "api.radio.types.RadioGroupItemProps.members.variant.description":
    "控制单选项边框和填充强调程度。",
  "api.radio.types.RadioGroupItemProps.remarks":
    "包裹 Radix RadioGroup.Item，并可继承 RadioGroup 的视觉变体。",
  "api.radio.types.RadioGroupProps.description": "贴纸单选组根元素的 props。",
  "api.radio.types.RadioGroupProps.members.className.description":
    "单选组根元素的自定义 className。",
  "api.radio.types.RadioGroupProps.members.onChange.description":
    "选中值变化时调用。",
  "api.radio.types.RadioGroupProps.members.onChange.remarks":
    "接收下一个字符串值，保持与项目表单触发器约定一致。",
  "api.radio.types.RadioGroupProps.members.onValueChange.description":
    "选中值变化时调用。",
  "api.radio.types.RadioGroupProps.members.size.description":
    "控制子项和指示点尺寸。",
  "api.radio.types.RadioGroupProps.members.tone.description":
    "控制子项的语义纸张色调。",
  "api.radio.types.RadioGroupProps.members.variant.description":
    "控制子项边框和填充强调程度。",
  "api.radio.types.RadioGroupProps.remarks":
    "封装 Radix RadioGroup.Root，并保留 `onChange(value)` 作为适配 Form.Item 的 `onValueChange` 别名。",
  "api.switch.description": "带触感贴纸轨道和纸张滑块的 Radix 开关。",
  "api.switch.components.Switch.description":
    "由 Radix Switch 驱动的贴纸开关。",
  "api.switch.components.Switch.props.description": "贴纸开关根元素的 props。",
  "api.switch.components.Switch.props.members.className.description":
    "开关根元素的自定义 className。",
  "api.switch.components.Switch.props.members.size.description":
    "控制开关轨道和滑块尺寸。",
  "api.switch.components.Switch.props.members.tone.description":
    "控制语义纸张色调。",
  "api.switch.components.Switch.props.members.variant.description":
    "控制开关边框和填充强调程度。",
  "api.switch.components.Switch.props.remarks":
    "包裹 Radix Switch.Root，并加入贴纸尺寸、色调和变体 props。",
  "api.switch.exports.Switch.description": "由 Radix Switch 驱动的贴纸开关。",
  "api.switch.exports.SwitchProps.description": "贴纸开关根元素的 props。",
  "api.switch.exports.SwitchProps.remarks":
    "包裹 Radix Switch.Root，并加入贴纸尺寸、色调和变体 props。",
  "api.switch.exports.switchVariants.description":
    "根据结构、色调和尺寸变体生成贴纸开关的 className。",
  "api.switch.types.SwitchProps.description": "贴纸开关根元素的 props。",
  "api.switch.types.SwitchProps.members.className.description":
    "开关根元素的自定义 className。",
  "api.switch.types.SwitchProps.members.size.description":
    "控制开关轨道和滑块尺寸。",
  "api.switch.types.SwitchProps.members.tone.description": "控制语义纸张色调。",
  "api.switch.types.SwitchProps.members.variant.description":
    "控制开关边框和填充强调程度。",
  "api.switch.types.SwitchProps.remarks":
    "包裹 Radix Switch.Root，并加入贴纸尺寸、色调和变体 props。",
  "api.form.description":
    "带 handbook 贴纸字段状态的 Ant Design 风格表单控制器。",
  "api.form.components.Form.props.description": "贴纸表单根元素的 props。",
  "api.form.components.Form.props.members.disabled.description":
    "默认禁用所有已注册字段。",
  "api.form.components.Form.props.members.form.description":
    "由 `Form.useForm` 创建的受控表单实例。",
  "api.form.components.Form.props.members.initialValues.description":
    "首次挂载时复制到表单 store 的初始值。",
  "api.form.components.Form.props.members.layout.description":
    "控制标签和字段布局。",
  "api.form.components.Form.props.members.onFinish.description":
    "提交校验成功后调用。",
  "api.form.components.Form.props.members.onFinishFailed.description":
    "提交校验失败后调用。",
  "api.form.components.Form.props.members.validateTrigger.description":
    "默认字段校验触发器。",
  "api.form.components.Form.props.remarks":
    "继承原生 form 属性，并加入 Ant Design 风格的表单状态回调。",
  "api.form.exports.FieldData.description": "`setFields` 使用的字段数据。",
  "api.form.exports.FormInstance.description":
    "`Form.useForm` 返回的命令式表单实例。",
  "api.form.exports.FormItemProps.description": "贴纸表单字段的 props。",
  "api.form.exports.FormProps.description": "贴纸表单根元素的 props。",
  "api.form.exports.FormProps.remarks":
    "继承原生 form 属性，并加入 Ant Design 风格的表单状态回调。",
  "api.form.exports.FormRule.description": "表单字段的校验规则。",
  "api.form.exports.NamePath.description":
    "用于在表单 store 中读写值的字段名称路径。",
  "api.form.exports.useForm.description": "创建或复用贴纸表单实例。",
  "api.form.exports.ValidateErrorInfo.description":
    "传递给 `onFinishFailed` 的错误信息。",
  "api.form.types.FieldData.description": "`setFields` 使用的字段数据。",
  "api.form.types.FieldData.members.errors.description": "字段校验错误。",
  "api.form.types.FieldData.members.name.description": "字段名称路径。",
  "api.form.types.FieldData.members.touched.description": "字段是否已被触碰。",
  "api.form.types.FieldData.members.validating.description":
    "字段当前是否正在校验。",
  "api.form.types.FieldData.members.value.description": "字段值。",
  "api.form.types.FormInstance.description":
    "`Form.useForm` 返回的命令式表单实例。",
  "api.form.types.FormInstance.members.getFieldsValue.description":
    "获取所有已注册字段值，或指定名称路径的字段值。",
  "api.form.types.FormInstance.members.getFieldValue.description":
    "获取单个字段值。",
  "api.form.types.FormInstance.members.resetFields.description":
    "将字段重置回 `initialValues`。",
  "api.form.types.FormInstance.members.setFields.description":
    "设置字段元数据和值。",
  "api.form.types.FormInstance.members.setFieldsValue.description":
    "将多个值合并到表单 store。",
  "api.form.types.FormInstance.members.setFieldValue.description":
    "设置单个字段值。",
  "api.form.types.FormInstance.members.submit.description":
    "提交表单并运行校验。",
  "api.form.types.FormInstance.members.validateFields.description":
    "校验已注册字段，或指定名称路径的字段。",
  "api.form.types.FormItemProps.description": "贴纸表单字段的 props。",
  "api.form.types.FormItemProps.members.children.description":
    "受控字段子元素。",
  "api.form.types.FormItemProps.members.extra.description":
    "渲染在字段下方的额外辅助文案。",
  "api.form.types.FormItemProps.members.help.description":
    "自定义帮助内容。省略时显示校验错误。",
  "api.form.types.FormItemProps.members.label.description": "字段标签。",
  "api.form.types.FormItemProps.members.name.description": "字段名称路径。",
  "api.form.types.FormItemProps.members.required.description":
    "将标签标记为必填，但不额外添加校验规则。",
  "api.form.types.FormItemProps.members.rules.description": "字段校验规则。",
  "api.form.types.FormItemProps.members.trigger.description":
    "用于收集字段变更的事件 prop。",
  "api.form.types.FormItemProps.members.validateStatus.description":
    "展示型字段的显式校验状态。",
  "api.form.types.FormItemProps.members.validateTrigger.description":
    "字段级校验触发器。",
  "api.form.types.FormItemProps.members.valuePropName.description":
    "传给子元素的受控值 prop 名称。",
  "api.form.types.FormProps.description": "贴纸表单根元素的 props。",
  "api.form.types.FormProps.members.disabled.description":
    "默认禁用所有已注册字段。",
  "api.form.types.FormProps.members.form.description":
    "由 `Form.useForm` 创建的受控表单实例。",
  "api.form.types.FormProps.members.initialValues.description":
    "首次挂载时复制到表单 store 的初始值。",
  "api.form.types.FormProps.members.layout.description": "控制标签和字段布局。",
  "api.form.types.FormProps.members.onFinish.description":
    "提交校验成功后调用。",
  "api.form.types.FormProps.members.onFinishFailed.description":
    "提交校验失败后调用。",
  "api.form.types.FormProps.members.validateTrigger.description":
    "默认字段校验触发器。",
  "api.form.types.FormProps.remarks":
    "继承原生 form 属性，并加入 Ant Design 风格的表单状态回调。",
  "api.form.types.FormRule.description": "表单字段的校验规则。",
  "api.form.types.FormRule.members.len.description":
    "当字符串或数组长度不等于该值，或数字不等于该值时校验失败。",
  "api.form.types.FormRule.members.max.description":
    "当字符串或数组长于该值，或数字大于该值时校验失败。",
  "api.form.types.FormRule.members.message.description":
    "规则校验失败时显示的自定义消息。",
  "api.form.types.FormRule.members.min.description":
    "当字符串或数组短于该值，或数字小于该值时校验失败。",
  "api.form.types.FormRule.members.pattern.description":
    "当字符串不匹配该正则时校验失败。",
  "api.form.types.FormRule.members.required.description":
    "当字段值为空时校验失败。",
  "api.form.types.FormRule.members.type.description": "检查基础运行时值类型。",
  "api.form.types.FormRule.members.validateTrigger.description":
    "应运行此规则的触发器名称。",
  "api.form.types.FormRule.members.validator.description":
    "自定义同步或异步校验器。",
  "api.form.types.FormRule.members.whitespace.description":
    "启用 `required` 时，将仅包含空白的字符串视为空值。",
  "api.form.types.NamePath.description":
    "用于在表单 store 中读写值的字段名称路径。",
  "api.form.types.ValidateErrorInfo.description":
    "传递给 `onFinishFailed` 的错误信息。",
  "api.form.types.ValidateErrorInfo.members.errorFields.description":
    "校验过程中收集到的字段错误。",
  "api.form.types.ValidateErrorInfo.members.values.description": "当前表单值。",
  "api.table.description": "用于 API 参考和结构化数据的可滚动纸张表格框架。",
  "api.table.components.Table.description":
    "用于密集结构化数据的可滚动 handbook 风格表格框架。",
  "api.table.components.Table.props.description": "贴纸表格根元素的 props。",
  "api.table.components.Table.props.members.containerClassName.description":
    "应用到 table 外层可滚动容器的 className。",
  "api.table.components.Table.props.remarks":
    "继承原生 table 属性，并将 table 包裹在可滚动贴纸框架内。",
  "api.table.exports.Table.description":
    "用于密集结构化数据的可滚动 handbook 风格表格框架。",
  "api.table.types.TableProps.description": "贴纸表格根元素的 props。",
  "api.table.types.TableProps.members.containerClassName.description":
    "应用到 table 外层可滚动容器的 className。",
  "api.table.types.TableProps.remarks":
    "继承原生 table 属性，并将 table 包裹在可滚动贴纸框架内。",
  "api.tag.description": "用于状态、标签和元数据徽章的紧凑贴纸标签。",
  "api.tag.components.Tag.props.description": "贴纸标签徽章元素的 props。",
  "api.tag.components.Tag.props.members.as.description":
    "控制标签渲染的语义根元素。",
  "api.tag.components.Tag.props.members.color.description":
    "控制标签的语义颜色。",
  "api.tag.components.Tag.props.members.dot.description":
    "在标签内容前显示小状态点。",
  "api.tag.components.Tag.props.members.rounded.description":
    "控制标签是胶囊形态，还是随 size 调整的圆角形态。",
  "api.tag.components.Tag.props.members.size.description":
    "控制标签高度、内边距和文字尺寸。",
  "api.tag.components.Tag.props.members.variant.description":
    "控制标签视觉结构和强调程度。",
  "api.tag.components.Tag.props.remarks":
    "继承原生 HTML 属性，并加入语义元素和贴纸变体。",
  "api.tag.exports.tagVariants.description":
    "根据结构、颜色和尺寸变体生成标签 className。",
  "api.tag.types.TagProps.description": "贴纸标签徽章元素的 props。",
  "api.tag.types.TagProps.members.as.description": "控制标签渲染的语义根元素。",
  "api.tag.types.TagProps.members.color.description": "控制标签的语义颜色。",
  "api.tag.types.TagProps.members.dot.description":
    "在标签内容前显示小状态点。",
  "api.tag.types.TagProps.members.rounded.description":
    "控制标签是胶囊形态，还是随 size 调整的圆角形态。",
  "api.tag.types.TagProps.members.size.description":
    "控制标签高度、内边距和文字尺寸。",
  "api.tag.types.TagProps.members.variant.description":
    "控制标签视觉结构和强调程度。",
  "api.tag.types.TagProps.remarks":
    "继承原生 HTML 属性，并加入语义元素和贴纸变体。",
  "api.tag.variants.tagVariants.description":
    "根据结构、颜色和尺寸变体生成标签 className。",
  "api.layout.description":
    "用于贴纸组件组合的 Tailwind 安全 Flex 与 Grid 原语。",
  "api.layout.components.Flex.description":
    "用于工具栏、行、堆叠和换行操作组的 Flex 布局原语。",
  "api.layout.components.Flex.props.description":
    "贴纸 Flex 布局原语的 props。",
  "api.layout.components.Flex.props.members.align.description":
    "控制交叉轴上的子项对齐。",
  "api.layout.components.Flex.props.members.as.description":
    "控制布局渲染的语义根元素。",
  "api.layout.components.Flex.props.members.asChild.description":
    "将布局 class 和状态 props 渲染到唯一的子元素上。",
  "api.layout.components.Flex.props.members.direction.description":
    "控制 flex 轴向和视觉顺序。",
  "api.layout.components.Flex.props.members.gap.description":
    "控制子元素之间的间距。",
  "api.layout.components.Flex.props.members.inline.description":
    "使用 `inline-flex` 而不是 `flex`。",
  "api.layout.components.Flex.props.members.justify.description":
    "控制主轴分布。",
  "api.layout.components.Flex.props.members.wrap.description": "控制换行行为。",
  "api.layout.components.Flex.props.remarks":
    "继承原生 HTML 属性，并加入静态、Tailwind 安全的布局变体。",
  "api.layout.components.Grid.description":
    "用于响应式卡片行和重复内容组的 Grid 布局原语。",
  "api.layout.components.Grid.props.description":
    "贴纸 Grid 布局原语的 props。",
  "api.layout.components.Grid.props.members.align.description":
    "控制块轴上的子项对齐。",
  "api.layout.components.Grid.props.members.as.description":
    "控制布局渲染的语义根元素。",
  "api.layout.components.Grid.props.members.asChild.description":
    "将布局 class 和状态 props 渲染到唯一的子元素上。",
  "api.layout.components.Grid.props.members.columns.description":
    "控制 grid 列模板。",
  "api.layout.components.Grid.props.members.gap.description":
    "控制子元素之间的间距。",
  "api.layout.components.Grid.props.members.inline.description":
    "使用 `inline-grid` 而不是 `grid`。",
  "api.layout.components.Grid.props.members.justify.description":
    "控制内联轴上的子项对齐。",
  "api.layout.components.Grid.props.remarks":
    "继承原生 HTML 属性，并加入静态、Tailwind 安全的布局变体。",
  "api.layout.exports.Flex.description":
    "用于工具栏、行、堆叠和换行操作组的 Flex 布局原语。",
  "api.layout.exports.FlexProps.description": "贴纸 Flex 布局原语的 props。",
  "api.layout.exports.FlexProps.remarks":
    "继承原生 HTML 属性，并加入静态、Tailwind 安全的布局变体。",
  "api.layout.exports.Grid.description":
    "用于响应式卡片行和重复内容组的 Grid 布局原语。",
  "api.layout.exports.GridProps.description": "贴纸 Grid 布局原语的 props。",
  "api.layout.exports.GridProps.remarks":
    "继承原生 HTML 属性，并加入静态、Tailwind 安全的布局变体。",
  "api.layout.exports.flexVariants.description":
    "根据方向、对齐、间距和换行变体生成 flex 布局 className。",
  "api.layout.exports.gridVariants.description":
    "根据列、对齐和间距变体生成 grid 布局 className。",
  "api.layout.types.FlexProps.description": "贴纸 Flex 布局原语的 props。",
  "api.layout.types.FlexProps.members.align.description":
    "控制交叉轴上的子项对齐。",
  "api.layout.types.FlexProps.members.as.description":
    "控制布局渲染的语义根元素。",
  "api.layout.types.FlexProps.members.asChild.description":
    "将布局 class 和状态 props 渲染到唯一的子元素上。",
  "api.layout.types.FlexProps.members.direction.description":
    "控制 flex 轴向和视觉顺序。",
  "api.layout.types.FlexProps.members.gap.description":
    "控制子元素之间的间距。",
  "api.layout.types.FlexProps.members.inline.description":
    "使用 `inline-flex` 而不是 `flex`。",
  "api.layout.types.FlexProps.members.justify.description": "控制主轴分布。",
  "api.layout.types.FlexProps.members.wrap.description": "控制换行行为。",
  "api.layout.types.FlexProps.remarks":
    "继承原生 HTML 属性，并加入静态、Tailwind 安全的布局变体。",
  "api.layout.types.GridProps.description": "贴纸 Grid 布局原语的 props。",
  "api.layout.types.GridProps.members.align.description":
    "控制块轴上的子项对齐。",
  "api.layout.types.GridProps.members.as.description":
    "控制布局渲染的语义根元素。",
  "api.layout.types.GridProps.members.asChild.description":
    "将布局 class 和状态 props 渲染到唯一的子元素上。",
  "api.layout.types.GridProps.members.columns.description":
    "控制 grid 列模板。",
  "api.layout.types.GridProps.members.gap.description":
    "控制子元素之间的间距。",
  "api.layout.types.GridProps.members.inline.description":
    "使用 `inline-grid` 而不是 `grid`。",
  "api.layout.types.GridProps.members.justify.description":
    "控制内联轴上的子项对齐。",
  "api.layout.types.GridProps.remarks":
    "继承原生 HTML 属性，并加入静态、Tailwind 安全的布局变体。",
  "api.layout.variants.flexVariants.description":
    "根据方向、对齐、间距和换行变体生成 flex 布局 className。",
  "api.layout.variants.gridVariants.description":
    "根据列、对齐和间距变体生成 grid 布局 className。",
  "api.divider.description": "用于章节、元数据行和分栏面板的语义贴纸分隔线。",
  "api.divider.components.Divider.description":
    "用于章节、元数据行和分栏面板的贴纸分隔线。",
  "api.divider.components.Divider.props.description": "贴纸分隔线的 props。",
  "api.divider.components.Divider.props.members.align.description":
    "沿横向分隔线对齐标签内容。",
  "api.divider.components.Divider.props.members.decorative.description":
    "当分隔线仅作装饰时，将其从辅助技术中隐藏。",
  "api.divider.components.Divider.props.members.orientation.description":
    "控制分隔线方向。",
  "api.divider.components.Divider.props.members.tone.description":
    "控制分隔线的语义颜色。",
  "api.divider.components.Divider.props.members.variant.description":
    "控制分隔线样式。",
  "api.divider.components.Divider.props.members.weight.description":
    "控制分隔线粗细。",
  "api.divider.components.Divider.props.remarks":
    "继承原生 div 属性，并加入线条方向、色调、粗细和可选标签内容。",
  "api.divider.exports.Divider.description":
    "用于章节、元数据行和分栏面板的贴纸分隔线。",
  "api.divider.exports.DividerProps.description": "贴纸分隔线的 props。",
  "api.divider.exports.DividerProps.remarks":
    "继承原生 div 属性，并加入线条方向、色调、粗细和可选标签内容。",
  "api.divider.exports.dividerVariants.description":
    "根据方向和标签对齐生成分隔线根元素 className。",
  "api.divider.types.DividerProps.description": "贴纸分隔线的 props。",
  "api.divider.types.DividerProps.members.align.description":
    "沿横向分隔线对齐标签内容。",
  "api.divider.types.DividerProps.members.decorative.description":
    "当分隔线仅作装饰时，将其从辅助技术中隐藏。",
  "api.divider.types.DividerProps.members.orientation.description":
    "控制分隔线方向。",
  "api.divider.types.DividerProps.members.tone.description":
    "控制分隔线的语义颜色。",
  "api.divider.types.DividerProps.members.variant.description":
    "控制分隔线样式。",
  "api.divider.types.DividerProps.members.weight.description":
    "控制分隔线粗细。",
  "api.divider.types.DividerProps.remarks":
    "继承原生 div 属性，并加入线条方向、色调、粗细和可选标签内容。",
  "api.divider.variants.dividerVariants.description":
    "根据方向和标签对齐生成分隔线根元素 className。",
  "api.jsx-join.description":
    "一个在 JSX 子节点之间插入分隔符的小型 React 工具。",
  "api.jsx-join.components.JsxJoin.description":
    "用分隔符连接 JSX 子节点，同时保留每个子节点。",
  "api.jsx-join.components.JsxJoin.props.description":
    "使用可复用分隔符连接 JSX 子节点的 props。",
  "api.jsx-join.components.JsxJoin.props.members.as.description":
    "用于包裹拼接后节点的根元素。",
  "api.jsx-join.components.JsxJoin.props.members.children.description":
    "需要连接的子节点。",
  "api.jsx-join.components.JsxJoin.props.members.filterEmpty.description":
    "连接前移除 null、undefined、boolean 和空字符串子节点。",
  "api.jsx-join.components.JsxJoin.props.members.separator.description":
    "插入到每个子节点之间的分隔节点或渲染函数。",
  "api.jsx-join.components.JsxJoin.props.remarks":
    "默认渲染 Fragment，因此可在文本行、列表和组件插槽中使用，不额外引入 DOM。",
  "api.jsx-join.exports.JsxJoin.description":
    "用分隔符连接 JSX 子节点，同时保留每个子节点。",
  "api.jsx-join.exports.JsxJoinProps.description":
    "使用可复用分隔符连接 JSX 子节点的 props。",
  "api.jsx-join.exports.JsxJoinProps.remarks":
    "默认渲染 Fragment，因此可在文本行、列表和组件插槽中使用，不额外引入 DOM。",
  "api.jsx-join.types.JsxJoinProps.description":
    "使用可复用分隔符连接 JSX 子节点的 props。",
  "api.jsx-join.types.JsxJoinProps.members.as.description":
    "用于包裹拼接后节点的根元素。",
  "api.jsx-join.types.JsxJoinProps.members.children.description":
    "需要连接的子节点。",
  "api.jsx-join.types.JsxJoinProps.members.filterEmpty.description":
    "连接前移除 null、undefined、boolean 和空字符串子节点。",
  "api.jsx-join.types.JsxJoinProps.members.separator.description":
    "插入到每个子节点之间的分隔节点或渲染函数。",
  "api.jsx-join.types.JsxJoinProps.remarks":
    "默认渲染 Fragment，因此可在文本行、列表和组件插槽中使用，不额外引入 DOM。",
  "api.jsx-join.types.JsxJoinSeparatorContext.members.after.description":
    "分隔符之后的节点。",
  "api.jsx-join.types.JsxJoinSeparatorContext.members.before.description":
    "分隔符之前的节点。",
  "api.jsx-join.types.JsxJoinSeparatorContext.members.index.description":
    "从零开始的分隔符索引。",
  "api.tooltip.description": "带小型 handbook 贴纸气泡的 Radix Tooltip。",
  "api.tooltip.components.Tooltip.description":
    "由 Radix Tooltip 驱动的贴纸 Tooltip 根组件。",
  "api.tooltip.components.TooltipContent.description":
    "通过 Portal 渲染的贴纸 Tooltip 气泡。",
  "api.tooltip.components.TooltipContent.props.description":
    "贴纸 Tooltip 内容的 props。",
  "api.tooltip.components.TooltipContent.props.members.showArrow.description":
    "渲染指向触发器的小型墨色箭头。",
  "api.tooltip.components.TooltipContent.props.members.size.description":
    "控制 Tooltip 内边距和文字尺寸。",
  "api.tooltip.components.TooltipContent.props.members.tone.description":
    "控制 Tooltip 的纸张色调。",
  "api.tooltip.components.TooltipContent.props.remarks":
    "包裹 Radix Tooltip.Content，并加入贴纸色调、尺寸和可选箭头样式。",
  "api.tooltip.components.TooltipProvider.description":
    "为贴纸 Tooltip 提供时间控制默认值。",
  "api.tooltip.components.TooltipProvider.props.description":
    "贴纸 Tooltip Provider 的 props。",
  "api.tooltip.components.TooltipProvider.props.members.delayDuration.description":
    "Tooltip 打开前的延迟毫秒数。",
  "api.tooltip.components.TooltipProvider.props.members.skipDelayDuration.description":
    "另一个 Tooltip 复用即时打开窗口前的延迟毫秒数。",
  "api.tooltip.components.TooltipTrigger.description":
    "在悬停或聚焦时打开 Tooltip。",
  "api.tooltip.exports.Tooltip.description":
    "由 Radix Tooltip 驱动的贴纸 Tooltip 根组件。",
  "api.tooltip.exports.TooltipContent.description":
    "通过 Portal 渲染的贴纸 Tooltip 气泡。",
  "api.tooltip.exports.TooltipContentProps.description":
    "贴纸 Tooltip 内容的 props。",
  "api.tooltip.exports.TooltipContentProps.remarks":
    "包裹 Radix Tooltip.Content，并加入贴纸色调、尺寸和可选箭头样式。",
  "api.tooltip.exports.TooltipProvider.description":
    "为贴纸 Tooltip 提供时间控制默认值。",
  "api.tooltip.exports.TooltipProviderProps.description":
    "贴纸 Tooltip Provider 的 props。",
  "api.tooltip.exports.TooltipTrigger.description":
    "在悬停或聚焦时打开 Tooltip。",
  "api.tooltip.exports.tooltipContentVariants.description":
    "根据色调和尺寸选项生成贴纸 Tooltip 内容 className。",
  "api.tooltip.types.TooltipContentProps.description":
    "贴纸 Tooltip 内容的 props。",
  "api.tooltip.types.TooltipContentProps.members.showArrow.description":
    "渲染指向触发器的小型墨色箭头。",
  "api.tooltip.types.TooltipContentProps.members.size.description":
    "控制 Tooltip 内边距和文字尺寸。",
  "api.tooltip.types.TooltipContentProps.members.tone.description":
    "控制 Tooltip 的纸张色调。",
  "api.tooltip.types.TooltipContentProps.remarks":
    "包裹 Radix Tooltip.Content，并加入贴纸色调、尺寸和可选箭头样式。",
  "api.tooltip.types.TooltipProviderProps.description":
    "贴纸 Tooltip Provider 的 props。",
  "api.tooltip.types.TooltipProviderProps.members.delayDuration.description":
    "Tooltip 打开前的延迟毫秒数。",
  "api.tooltip.types.TooltipProviderProps.members.skipDelayDuration.description":
    "另一个 Tooltip 复用即时打开窗口前的延迟毫秒数。",
  "api.tooltip.variants.tooltipContentVariants.description":
    "根据色调和尺寸选项生成贴纸 Tooltip 内容 className。",
  "api.popover.description": "用于紧凑交互贴纸面板的 Radix Popover。",
  "api.popover.components.Popover.description":
    "由 Radix Popover 驱动的贴纸 Popover 根组件。",
  "api.popover.components.PopoverAnchor.description":
    "将 Popover 内容定位到自定义锚点。",
  "api.popover.components.PopoverClose.description": "激活时关闭 Popover。",
  "api.popover.components.PopoverContent.description":
    "通过 Portal 渲染的贴纸 Popover 面板，用于交互式浮动内容。",
  "api.popover.components.PopoverContent.props.description":
    "贴纸 Popover 内容的 props。",
  "api.popover.components.PopoverContent.props.members.showArrow.description":
    "渲染指向触发器的小型墨色箭头。",
  "api.popover.components.PopoverContent.props.members.size.description":
    "控制 Popover 宽度和内边距。",
  "api.popover.components.PopoverContent.props.members.tone.description":
    "控制 Popover 的纸张色调。",
  "api.popover.components.PopoverContent.props.remarks":
    "包裹 Radix Popover.Content，并加入贴纸色调、尺寸和可选箭头样式。",
  "api.popover.components.PopoverTrigger.description": "打开 Popover。",
  "api.popover.exports.Popover.description":
    "由 Radix Popover 驱动的贴纸 Popover 根组件。",
  "api.popover.exports.PopoverAnchor.description":
    "将 Popover 内容定位到自定义锚点。",
  "api.popover.exports.PopoverClose.description": "激活时关闭 Popover。",
  "api.popover.exports.PopoverContent.description":
    "通过 Portal 渲染的贴纸 Popover 面板，用于交互式浮动内容。",
  "api.popover.exports.PopoverContentProps.description":
    "贴纸 Popover 内容的 props。",
  "api.popover.exports.PopoverContentProps.remarks":
    "包裹 Radix Popover.Content，并加入贴纸色调、尺寸和可选箭头样式。",
  "api.popover.exports.PopoverTrigger.description": "打开 Popover。",
  "api.popover.exports.popoverContentVariants.description":
    "根据色调和尺寸选项生成贴纸 Popover 内容 className。",
  "api.popover.types.PopoverContentProps.description":
    "贴纸 Popover 内容的 props。",
  "api.popover.types.PopoverContentProps.members.showArrow.description":
    "渲染指向触发器的小型墨色箭头。",
  "api.popover.types.PopoverContentProps.members.size.description":
    "控制 Popover 宽度和内边距。",
  "api.popover.types.PopoverContentProps.members.tone.description":
    "控制 Popover 的纸张色调。",
  "api.popover.types.PopoverContentProps.remarks":
    "包裹 Radix Popover.Content，并加入贴纸色调、尺寸和可选箭头样式。",
  "api.popover.variants.popoverContentVariants.description":
    "根据色调和尺寸选项生成贴纸 Popover 内容 className。",
  "api.dialog.description": "带有 handbook 贴纸纸张面板的 Radix 模态 Dialog。",
  "api.dialog.components.Dialog.description":
    "由 Radix Dialog 驱动的贴纸 Dialog 根组件。",
  "api.dialog.components.DialogClose.description": "激活时关闭 Dialog。",
  "api.dialog.components.DialogContent.description":
    "通过 Portal 渲染的贴纸 Dialog 面板。",
  "api.dialog.components.DialogContent.props.description":
    "贴纸 Dialog 内容的 props。",
  "api.dialog.components.DialogContent.props.members.closeLabel.description":
    "图标关闭按钮的可访问标签。",
  "api.dialog.components.DialogContent.props.members.showClose.description":
    "渲染右上角关闭按钮。",
  "api.dialog.components.DialogContent.props.members.size.description":
    "控制 Dialog 宽度和内边距。",
  "api.dialog.components.DialogContent.props.members.tone.description":
    "控制 Dialog 的纸张色调。",
  "api.dialog.components.DialogContent.props.remarks":
    "包裹 Radix Dialog.Content，并加入贴纸尺寸、色调和关闭按钮样式。",
  "api.dialog.components.DialogDescription.description": "贴纸 Dialog 描述。",
  "api.dialog.components.DialogFooter.description": "Dialog 操作区页脚。",
  "api.dialog.components.DialogHeader.description":
    "用于 Dialog 标题和描述的头部区域。",
  "api.dialog.components.DialogOverlay.description": "贴纸 Dialog 遮罩。",
  "api.dialog.components.DialogOverlay.props.description":
    "贴纸 Dialog 遮罩的 props。",
  "api.dialog.components.DialogPortal.description":
    "将 Dialog 遮罩和内容 Portal 到 document body。",
  "api.dialog.components.DialogTitle.description": "贴纸 Dialog 标题。",
  "api.dialog.components.DialogTrigger.description": "打开 Dialog。",
  "api.dialog.exports.Dialog.description":
    "由 Radix Dialog 驱动的贴纸 Dialog 根组件。",
  "api.dialog.exports.DialogClose.description": "激活时关闭 Dialog。",
  "api.dialog.exports.DialogContent.description":
    "通过 Portal 渲染的贴纸 Dialog 面板。",
  "api.dialog.exports.DialogContentProps.description":
    "贴纸 Dialog 内容的 props。",
  "api.dialog.exports.DialogContentProps.remarks":
    "包裹 Radix Dialog.Content，并加入贴纸尺寸、色调和关闭按钮样式。",
  "api.dialog.exports.DialogDescription.description": "贴纸 Dialog 描述。",
  "api.dialog.exports.DialogFooter.description": "Dialog 操作区页脚。",
  "api.dialog.exports.DialogHeader.description":
    "用于 Dialog 标题和描述的头部区域。",
  "api.dialog.exports.DialogOverlay.description": "贴纸 Dialog 遮罩。",
  "api.dialog.exports.DialogOverlayProps.description":
    "贴纸 Dialog 遮罩的 props。",
  "api.dialog.exports.DialogPortal.description":
    "将 Dialog 遮罩和内容 Portal 到 document body。",
  "api.dialog.exports.DialogTitle.description": "贴纸 Dialog 标题。",
  "api.dialog.exports.DialogTrigger.description": "打开 Dialog。",
  "api.dialog.exports.dialogContentVariants.description":
    "根据尺寸和色调选项生成贴纸 Dialog 内容 className。",
  "api.dialog.types.DialogContentProps.description":
    "贴纸 Dialog 内容的 props。",
  "api.dialog.types.DialogContentProps.members.closeLabel.description":
    "图标关闭按钮的可访问标签。",
  "api.dialog.types.DialogContentProps.members.showClose.description":
    "渲染右上角关闭按钮。",
  "api.dialog.types.DialogContentProps.members.size.description":
    "控制 Dialog 宽度和内边距。",
  "api.dialog.types.DialogContentProps.members.tone.description":
    "控制 Dialog 的纸张色调。",
  "api.dialog.types.DialogContentProps.remarks":
    "包裹 Radix Dialog.Content，并加入贴纸尺寸、色调和关闭按钮样式。",
  "api.dialog.types.DialogOverlayProps.description":
    "贴纸 Dialog 遮罩的 props。",
  "api.dialog.variants.dialogContentVariants.description":
    "根据尺寸和色调选项生成贴纸 Dialog 内容 className。",
}

export { ZH_PREVIEW_API_DOC_TRANSLATIONS }
