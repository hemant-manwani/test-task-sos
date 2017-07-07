import * as React from 'react';

import SignupStep1 from '../screens/SignupStep1';
import SignupStep2 from '../screens/SignupStep2';
import SignupStep3 from '../screens/SignupStep3';

class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      email: '',
      password: '',
      date_of_birth: '',
      gender: '',
      how_hear_about_us: '',
      confirmPassword: '',
    };
  }

  onSubmitForm1 = (value) => {
    this.goToNextStep(2);
    this.setState(value);
  }

  onSubmitForm2 = (value) => {
    this.goToNextStep(3);
    this.setState(value);
  }

  getForm1InitialValues = () => ({
    email: this.state.email,
    password: this.state.password,
    confirmPassword: this.state.confirmPassword,
  })

  getForm2InitialValues = () => ({
    gender: this.state.gender,
    date_of_birth: this.state.date_of_birth,
    how_hear_about_us: this.state.how_hear_about_us,
  })

  getComponent = () => {
    const currentStep = this.state.currentStep;

    if (currentStep === 2) {
      return (
        <SignupStep2
          onSubmitForm={this.onSubmitForm2}
          goToPreviousStep={() => this.goToNextStep(1)}
          initialValues={this.getForm2InitialValues()}
        />
      );
    } else if (currentStep === 3) {
      return <SignupStep3 dashboardButtonTapped={this.dashboardButtonTapped} />;
    }

    return (
      <SignupStep1
        onSubmitForm={this.onSubmitForm1}
        initialValues={this.getForm1InitialValues()}
      />
    );
  }

  dashboardButtonTapped = () => {
    const userData = {
      user_data: {
        email: this.state.email,
        password: this.state.password,
        gender: this.state.gender,
        date_of_birth: this.state.date_of_birth.getTime() / 1000,
        how_hear_about_us: this.state.how_hear_about_us,
      },
    };
    console.log(userData);
  }

  goToNextStep = (nextStep) => {
    this.setState({ currentStep: nextStep });
  }

  render() {
    return this.getComponent();
  }
}

export default Signup;
