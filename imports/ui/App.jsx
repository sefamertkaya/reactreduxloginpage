import React, {Component} from 'react'
import {Button, Form, Grid, Header, Segment} from 'semantic-ui-react'

import {connect} from "react-redux";

import {history} from "../../client/main";

import {controlUser} from "../actions/controlUser";


class App extends Component {

    state = {

        inputUserName:"",
        inputPass:""

    }

    changeUser = (e) => {

        this.setState({

            inputUserName: e.target.value
        })

    }
    changePass = (e) => {

        this.setState({

            inputPass: e.target.value
        })


    }


    constructor (props){
        super(props);


    }

    /*loginReducerden default olarak reduxa gonderdigim stateleri dinleyip girilen inputla ayniysa controluser icindeki
    * control propsunu true olarak ceviriyorum.
    *
    *Fakat ilk sefer de dispatch etmiyor.
    * */
    onControlUser = () =>{



        const {inputUserName, inputPass} = this.state;


            if(inputUserName ===this.props.log.kullanici  && inputPass ===this.props.log.sifre){

                this.props.dispatch(controlUser());

                console.log(this.props.control);

                if(this.props.control){

             history.push('/welcome')

                }else{
                    console.log("sistem hatasi.")
                }


            }else{ console.log("basarisiz");}


    }


    render(){
        const {inputUserName, inputUserPass} = this.state;

        return (


                <div className='login-form'> <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}
                </style>
                    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Header as='h2' color='teal' textAlign='center'>
                                Log-in to your account
                            </Header>
                            <Form size='large'>
                                <Segment stacked>
                                    <Form.Input
                                        fluid icon='user'
                                        iconPosition='left'
                                        placeholder='E-mail address'
                                        name='inputUserName'
                                        id='inputUserName'
                                        onChange={this.changeUser}
                                        value={inputUserName}

                                    />
                                    <Form.Input
                                        fluid
                                        icon='lock'
                                        iconPosition='left'
                                        placeholder='Password'
                                        type='password'
                                        name='inputUserPass'
                                        id='inputUserPass'
                                        onChange={this.changePass}
                                        value={inputUserPass}

                                    />

                                    <Button color='teal' fluid size='large' onClick={this.onControlUser}>
                                        Login
                                    </Button>
                                </Segment>
                            </Form>

                        </Grid.Column>
                    </Grid>
                </div>


        )

    }

}

const mapStateToProps = state => {

    return state;
}

export default connect(mapStateToProps)(App);
