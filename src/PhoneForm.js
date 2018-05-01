import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
            name: '',
            phone: ''
    }
    
    // element 의 name 기반으로 동시에 바인딩
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    handleSubmit = (e) => {
        e.preventDefault(); //페이지 리로딩 방지
        this.props.onCreate(this.state); //부모의 onCreate 함수에 state 를 전달 
        
        //상태 초기화
        this.setState({
            name: '',
            phone: ''
        });
    }
    
    render(){
        return(
                <form onSubmit={this.handleSubmit}>
                    <input placeholer="이름" 
                        value={this.state.name} 
                        onChange={this.handleChange}
                        name="name"
                    />
                    <input placeholer="전화번호"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        name="phone"
                    />
                    
                    <div>{this.state.name} {this.state.phone}</div>
                    <button type="submit">등록</button>
                </form>
                  
        );
    }
}

export default PhoneForm;