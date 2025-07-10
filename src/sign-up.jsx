import * as React from "react";
import {
  TextField,
  Button,
  Typography,
  FormControl,
  FormLabel,
  CssBaseline,
  Card,
  Box,
  Collapse,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

// Валидация
const validationSchema = yup.object({
  
  email: yup.string().email("Невалиден имейл").required("Имейл е задължителен"),
  
});

export default function SignUp() {
  const [step, setStep] = React.useState(1);

  const formik = useFormik({
    initialValues: { email: "",name:"" },
    validationSchema,
    onSubmit: (values) => {
      console.log("Финални данни:", values);
    },
  });

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #2196f3 0%, #e3f2fd 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
        }}
      >
        <Card
          elevation={6}
          sx={{
            maxWidth: 500,
            width: "100%",
            p: 4,
            borderRadius: 5,
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography variant="h4" align="center" sx={{ mb: 4, color: "#1565c0", fontWeight: 700 }}>
            Регистрация
          </Typography>

          <form onSubmit={formik.handleSubmit}>
            {/* Стъпка 1 */}
            {step === 1 && (
              <>
                

                <FormControl fullWidth sx={{ mb: 3 }}>
                  <FormLabel>Имейл</FormLabel>
                  <TextField
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </FormControl>

                <FormControl fullWidth sx={{ mb: 3 }}>
                  <FormLabel>Имe</FormLabel>
                  <TextField
                    id="name"
                    name="name"
                    placeholder="hristiana"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </FormControl>


                <Button
                  fullWidth
                  variant="contained"
                  sx={{ background: "#1976d2", mb: 2 }}
                 type="submit"
                >
                  Следваща стъпка
                </Button>
              </>
            )}

            {/* Стъпка 2 (нова форма) */}
            <Collapse in={step === 2}>
              <>
                
              </>
            </Collapse>
          </form>
        </Card>
      </Box>
    </>
  );
}