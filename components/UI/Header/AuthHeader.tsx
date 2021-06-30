import React from "react";
import { Container, Grid } from "@material-ui/core";
import { KeyboardBackspace } from "@material-ui/icons";
import { useRouter } from "next/router";

const AuthHeader = () => {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} md={12} lg={12}>
          <div className="auth__header">
            <button onClick={goHome}>
              <KeyboardBackspace /> Volver a la pagina principal
            </button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AuthHeader;
