import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { FormInput } from '~/components/HookForm/InputForm';

export default function Login() {
  const initialValues = { phone: '', password: '' };
  const schema = yup.object().shape({
    phone: yup.string().required('Please enter phone number and try again.').min(10),
    password: yup.string().required('Please enter password and try again.').min(8),
  });
  const {
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
      }}
    >
      <Box
        sx={{
          margin: 'auto',
          maxWidth: '960px',
          position: 'relative',
          top: '16px',
          height: '520px',
        }}
      >
        <section
          style={{
            backgroundImage: 'url(https://static.chotot.com/storage/assets/LOGIN/login_background.webp)',
            position: 'absolute',
            zIndex: 1,
            top: 0,
            bottom: 0,
            width: '100%',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
          }}
        ></section>
        <Box
          sx={{
            transform: 'translateX(-50%)',
            bottom: '20px',
            left: '50%',
            width: '340px',
            background: '#fff',
            boxShadow: '0 0 8px rgb(0 0 0 / 30%)',
            padding: '20px',
            position: 'absolute',
            zIndex: 2,
            top: 0,
          }}
        >
          <Box sx={{ margin: 'auto' }}>
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  '& h3': {
                    color: ' #ffba00',
                    marginBottom: '6px',
                  },
                  '& p': {
                    marginTop: '6px',
                    color: '#8c8c8c',
                  },
                }}
              >
                <Box>
                  <h3>????ng nh???p</h3>
                  <p>Ch??o b???n quay l???i</p>
                </Box>
                <Box
                  sx={{
                    '& img': {
                      width: '88px',
                    },
                  }}
                >
                  <img src="https://static.chotot.com/storage/assets/LOGIN/logo.svg" />
                </Box>
              </Box>
              <Box>
                <FormInput
                  sx={{
                    fontSize: 2,
                    color: 'red',
                    '& label': {
                      fontSize: 14,
                    },
                    '& svg': {
                      fontSize: 18,
                    },
                  }}
                  label="phone"
                  placeholder="Nh???p S??T c???a b???n"
                  name="phone"
                  type="text"
                  required
                  control={control}
                />
              </Box>
              <Box>
                <FormInput
                  sx={{
                    fontSize: 2,
                    color: 'red',
                    '& label': {
                      fontSize: 14,
                    },
                    '& svg': {
                      fontSize: 18,
                    },
                  }}
                  label="Password"
                  placeholder="Nh???p m???t kh???u c???a b???n"
                  type="password"
                  name="password"
                  required
                  control={control}
                />
              </Box>
              <Button
                sx={{
                  color: '#fff',
                  backgroundColor: '#f80',
                  borderColor: '#ffb057',
                  borderRadius: '4px',
                  width: '100%',
                  display: 'flex',
                  border: 'none',
                  justifyContent: 'center',
                  padding: '12px 16px 8px 16px',
                  marginTop: '8px',
                  fontSize: '14px',
                  lineHeight: '1',
                  fontWeight: '400',
                  '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: '#ffb057',
                    opacity: 0.5,
                  },
                }}
              >
                ????ng nh???p
              </Button>
            </form>
          </Box>
          <Box>
            <Box
              // <p
              sx={{
                textAlign: 'center',
                paddingTop: '16px',
                fontSize: '.875rem',

                '& a': {
                  color: '#2a70df',
                },
                '& a:hover': {
                  color: '#4e8bef',
                },
              }}
            >
              <Link to={'/forget-password'}>B???n qu??n m???t kh???u</Link>
              {/* </p> */}
            </Box>
            <Box>
              <p
                style={{
                  marginTop: '40px',
                  color: '#8c8c8c',
                  textAlign: 'center',
                }}
              >
                ho???c s??? d???ng
              </p>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                '& a': {
                  padding: 0,
                  marginBottom: '40px',
                },
                '& img': {
                  cursor: 'pointer',
                  borderRadius: '100%',
                  height: '40px',
                  width: '40px',
                  boxShadow: '0 0 8px rgb(0 0 0 / 30%)',
                  backgroundPosition: '50%',
                },
              }}
            >
              <Link style={{}}>
                <img src="https://static.chotot.com/storage/assets/LOGIN/facebook.svg" />
              </Link>
              <Link>
                <img src="https://static.chotot.com/storage/assets/LOGIN/google.svg" />
              </Link>
              <Link>
                <img src="https://static.chotot.com/storage/assets/LOGIN/apple.svg" />
              </Link>
            </Box>
            <Box
              sx={{
                fontSize: '.875rem',
                textAlign: 'center',
                '& a': {
                  margin: 0,
                  color: '#2a70df',
                },
                '& a:hover': {
                  color: '#4e8bef',
                },
              }}
            >
              Ban ch??a c?? t??i kho???n?<Link to={'/register'}>????ng k?? ngay</Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
