import React, { useMemo, useState } from "react"
import countryList from "react-select-country-list";
import Local from "./Local";
import Email from "./Email";
import UserName from "./UserName";
import Passwd from "./Passwd";
import PhoneNumber from "./PhoneNumber";
import "./Registry.css";
import { Container, Grid, Typography, Button, TextField } from "@material-ui/core";


export default class registry extends React.Component {
  constructor() {
    super()

    this.state = {
      local: "",
      options: countryList().getData(),
      phoneNumber: "",
      email: "",
      username: "",
      passwd: "",
      verificationCoden: "",
    }
  }

  LocalChangeInput(local) {
    this.setState({
      local,
    })
  }

  phoneNumberChangeInput(phoneNumber) {
    this.setState({
      phoneNumber,
    })
  }

  emailChangeInput(email) {
    this.setState({
      email,
    })
  }

  UsernameChangeInput(username) {
    this.setState({
      username,
    })
  }

  passwdChangeInput(passwd) {
    this.setState({
      passwd,
    })
  }

  registry_submit = (event) => {
    event.preventDefault();
    const { local, phoneNumber, email, username, passwd } = this.state;
    console.log(local, phoneNumber, email, username, passwd);


    if (email.length === 0) {
      alert("이메일을 입력하지 않았습니다.");
      return false;
    }

    let regex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (regex.test(email) === false) {
      alert("이메일 형식이 올바르지 않습니다.");
      this.setState({
        email: "",
      });
      return false;
    }

    if (username.length === 0) {
      alert("닉네임을 입력하지 않았습니다.");
      return false;
    }

    if (passwd.length === 0) {
      alert("비밀번호를 입력하지 않았습니다.");
      return false;
    }

    fetch('/User/Registry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        local: local,
        phoneNumber: phoneNumber,
        email: email,
        username: username,
        passwd: passwd,
      }),
    })
      .then(res => {
        alert("회원가입이 되었습니다.")

      })
  }

  render() {
    const { local, phoneNumber, email, username, passwd, verificationCoden } = this.state

    return (
      <>
        <div className="registryDiv">
          <h1 className="h1">글랜챗</h1>
          <div className="registryForm">
            <Container component="main" maxWidth="xs" style={{ marginTop: "4%" }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography component="h1" variant="h5">
                    회원가입
                  </Typography>
                </Grid>
              </Grid>
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Local
                      value={local}
                      onChange={(value) => this.LocalChangeInput(value)} />
                  </Grid>
                  <Grid item xs={12}>
                    <PhoneNumber
                      value={phoneNumber}
                      onChange={(value) => this.phoneNumberChangeInput(value)} />
                    <Button
                      className="Send-verification-coden"
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      style={{
                        backgroundColor: '#dfb8b8', width: '25%', height: '80%',
                        borderRadius: '1rem',
                      }}
                      onClick={this.sendVerificationCoden}
                    >
                      인증번호 보내기
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="verification-coden"
                      label="인증번호"
                      name="verification-coden"
                      autoComplete="verification-coden"
                      style={{ width: '55%' }}
                      value={verificationCoden}
                      onChange={(value) => this.verificationCoden(value)}
                    />
                    <Button
                      className="Check-verification-coden"
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      style={{
                        backgroundColor: '#dfb8b8', width: '25%', height: '80%',
                        borderRadius: '1rem',
                      }}
                      onClick={this.CheckVerificationCoden}
                    >
                      인증번호 확인
                      </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Email
                      value={email}
                      onChange={(value) => this.emailChangeInput(value)}
                      id="email" />
                  </Grid>
                  <Grid item xs={12}>
                    <UserName
                      value={username}
                      onChange={(value) => this.UsernameChangeInput(value)} />
                  </Grid>
                  <Grid item xs={12}>
                    <Passwd
                      value={passwd}
                      onChange={(value) => this.passwdChangeInput(value)} />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      className="registrybtn"
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      style={{
                        backgroundColor: '#dfb8b8', width: '80%',
                        borderRadius: '3rem'
                      }}
                      onClick={this.registry_submit}
                    >
                      회원가입
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Container>
          </div>
        </div>
      </>
    )
  }

}