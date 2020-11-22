import React from 'react'
import { Stack, Input, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react'
import { PrimaryButton } from '../../shared/components'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useCart } from '../../shared/state/useCart'

const submitCheckout = async ({ cartItems }: CheckoutPayload): Promise<{ cartItems; orderId: string; success?: boolean }> => {
  return Promise.resolve({ cartItems, orderId: '123', success: true })
}

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  cardNumber: yup
    .string()
    .required()
    .matches(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, 'Card should have xxxx xxxx xxxx xxxx format'),
  expDate: yup.date().required().typeError('Invalid date'),
  cvv: yup
    .string()
    .required()
    .matches(/^\d\d\d$/, 'CVV should contain three numbers'),
})

export interface CheckoutPayload {
  cartItems: any[]
}

interface CheckoutFormProps {
  submit?: (data: CheckoutPayload) => Promise<{ orderId: string | undefined; success?: boolean }>
}

export function CheckoutForm({ submit = submitCheckout }: CheckoutFormProps): JSX.Element {
  const { cartItems } = useCart()
  const { register, errors, handleSubmit } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = handleSubmit(async (data) => {
    const { orderId } = await submit({ cartItems })
    console.log(data, orderId)
    // clearCart()
  })

  return (
    <Stack as="form" spacing={6} onSubmit={onSubmit}>
      <FormField label={`cardholder's name`} id="cardholders-name" placeholder="John Smith" type="text" name="name" ref={register} errors={errors.name} />
      <FormField
        label="card number"
        id="card-number"
        placeholder="0000 0000 0000 0000"
        type="tel"
        inputMode="numeric"
        autoComplete="cc-number"
        name="cardNumber"
        normalize={(value) =>
          value
            .replace(/\s/g, '')
            .match(/.{1,4}/g)
            ?.join(' ')
            .substr(0, 19) || ''
        }
        ref={register}
        errors={errors.cardNumber}
      />
      <FormField label="expiration date" id="expiration-date" type="month" name="expDate" ref={register} errors={errors.expDate} />
      <FormField
        label="cvv"
        id="cvv"
        placeholder="000"
        type="number"
        name="cvv"
        ref={register}
        errors={errors.cvv}
        normalize={(value) => {
          return value.substr(0, 3)
        }}
      />
      <PrimaryButton type="submit">Place order</PrimaryButton>
    </Stack>
  )
}

interface FormFieldProps extends React.HTMLProps<HTMLInputElement> {
  label: string
  errors?: FormError
  normalize?: (value: string) => string
}

interface FormError {
  message: string
}

const FormField = React.forwardRef(
  ({ id, label, name, errors, normalize = (value) => value, ...inputProps }: FormFieldProps, ref: React.Ref<HTMLInputElement>) => {
    console.log({ errors })
    return (
      <FormControl id={id} isRequired isInvalid={!!errors} position="relative">
        <FormLabel textTransform="uppercase">{label}</FormLabel>
        <Input
          ref={ref}
          name={name}
          {...inputProps}
          onChange={(e) => (e.target.value = normalize(e.target.value))}
          bg="white"
          rounded="none"
          border="1px solid"
          borderColor="gray.900"
          _hover={{
            borderColor: 'gray.500',
          }}
        />
        <FormErrorMessage position="absolute" bottom={-6} left={0} width="full">
          {errors?.message}
        </FormErrorMessage>
      </FormControl>
    )
  }
)

FormField.displayName = 'FormField'
