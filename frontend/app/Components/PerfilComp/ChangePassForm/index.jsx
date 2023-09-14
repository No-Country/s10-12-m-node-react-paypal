import { Formik, Form, Field, ErrorMessage } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';


const ChangePasswordForm = () => {
    return (
      <Formik
        initialValues={{
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        }}
        validationSchema={Yup.object({
          currentPassword: Yup.string().required('La contraseña actual es obligatoria'),
          newPassword: Yup.string()
            .required('La nueva contraseña es obligatoria')
            .min(8, 'Mínimo 8 caracteres')
            .max(20, 'Máximo 20 caracteres')
            .matches(/[A-Z]/, 'Debe contener al menos una mayúscula')
            .matches(/[a-z]/, 'Debe contener al menos una minúscula')
            .matches(/[\d]/, 'Debe contener al menos un número')
            .matches(/[\W_]/, 'Debe contener al menos un símbolo')
            .test('no-spaces', 'No debe contener espacios', (value) => !/\s/.test(value)),
          confirmPassword: Yup.string()
            .required('Confirmar contraseña es obligatorio')
            .oneOf([Yup.ref('newPassword'), null], 'Las contraseñas deben coincidir'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          // Lógica para cambiar la contraseña
          setSubmitting(false);
        }}
      >
        <Form className="space-y-8">
          <div>
            <label htmlFor="currentPassword" className=' text-Azul/700 mr-3'>Contraseña Actual</label>
            <Field
              type="password"
              id="currentPassword"
              name="currentPassword"
              className="w-64 h-10 border p-2 rounded"
            />
            <ErrorMessage name="currentPassword" component="p" className="text-red-500" />
          </div>
          <div>
            <label htmlFor="newPassword" className=' text-Azul/700 mr-3'>Nueva Contraseña</label>
            <Field
              type="password"
              id="newPassword"
              name="newPassword"
              className="w-64 h-10 border p-2 rounded"
            />
            <ErrorMessage name="newPassword" component="p" className="text-red-500" />
          </div>
          <div>
            <label htmlFor="confirmPassword" className=' text-Azul/700 mr-3'>Confirmar Contraseña</label>
            <Field
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-64 h-10 border p-2 rounded"
            />
            <ErrorMessage name="confirmPassword" component="p" className="text-red-500" />
          </div>
          <div className="my-auto"> 
            <Link href="./Perfil">
            <button
              type="submit"
              className=" bg-Azul/700 w-41 h-10 rounded-md md:py-3.5 px-7 flex items-center justify-center text-white my-5 whitespace-nowrap"
            >
              Confirmar
            </button>
            </Link>
          </div>
        </Form>
      </Formik>
    );
  };
  
  export default ChangePasswordForm;
  