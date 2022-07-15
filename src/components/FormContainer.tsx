import React, { ReactNode } from 'react';
import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import { Dictionary, SafeAny } from '@models/common';

type FunctionChildren = (props: FormikProps<Dictionary>) => ReactNode;
interface FormContainerProps {
  initialValues: Dictionary;
  validationSchema?: SafeAny;
  onSubmit: (
    values: SafeAny,
    helpers?: FormikHelpers<SafeAny>
  ) => void | Promise<void>;
  children: FunctionChildren | ReactNode;
  innerRef?: React.Ref<FormikProps<SafeAny>>;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
}

export const FormContainer = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
  innerRef,
  validateOnChange = true,
  validateOnBlur = true,
}: FormContainerProps) => (
  <Formik
    validateOnChange={validateOnChange}
    validateOnBlur={validateOnBlur}
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    enableReinitialize
    innerRef={innerRef}
  >
    {(formProps: FormikProps<Dictionary>) =>
      typeof children !== 'function' ? (
        <Form>{children}</Form>
      ) : (
        children(formProps)
      )
    }
  </Formik>
);
