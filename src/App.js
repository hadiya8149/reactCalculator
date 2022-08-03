import logo from './logo.svg';
import React, {Component} from 'react';
import Buttons from './components/buttons'
// import {Button} from 'react-native';
import './App.css';
import Result from './components/result';
var mexp = require('math-expression-evaluator');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {result:0,sign:"", num:0, num2:0};
    this.handleclicks =this.handleclicks.bind(this);

  }
  
  handleclicks = (value) => {
    switch (value) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (this.state.result === 0) {
          this.setState({
            result: value, num:value});  
          ;

        } else {
          if (this.state.result.toString().match("([+/*-])+")){
            if(this.state.num2===0){  
              this.setState({
                  result:this.state.result+value,
                  num2:value

                  
                })
              }
            else{
              this.setState({num2:this.state.num2+value, result:this.state.result+value})
            }
        }
          else{
            this.setState({
              result: this.state.result + value, num:this.state.num+value
            })}
        };
        
        break;
        //duplication cases for operators
      case '+':
      case '-':
      case '/':
      case '*':
        console.log(this.state.result)
        console.log(this.state.num)
        console.log(this.state.result&&this.state.num, !this.state.result&&this.state.num)
        console.log(value)
        console.log(this.state.result[this.state.result.length-1])
        if (this.state.result[this.state.result.length-1].match('([+-/*])+')){
          this.setState({result:this.state.result, sign:value})
        }
        else{
          this.setState({result:this.state.result+value, sign:value})
        }
        break;
      case '=':
        //todo add a regex test to see if the statment is correct before passing it to eval
        //todo limit the result  to 14
        console.log(this.state.result);
        // this.setState({
        //   result: mexp.eval(this.state.result).parseFloat,
        //   num:mexp.eval(this.state.result),
        //   sign:""
        // })
        const Math = (a, b, sign)=>
          sign ==='+'?
          a+b
          :sign==='-'?
          a-b
          :sign==='/'?
          a/b
          :a*b;
        this.setState((state, props)=>{
          return {result:Math(Number(this.state.num), Number(this.state.num2), this.state.sign)}
        })
        this.setState((state, props)=>{
          return {num:0, num2:0, sign:""}
        })
        console.log("equal sign clicked")
        console.log(this.state)
        break;
        case 'AC':
          this.setState({
            result: 0,
            num:0,
            num2:0,
            sign:""
          })
          console.log("AC CLICKED", this.state)
          break;
          case '%':
            this.setState({
              result: parseFloat(this.state.result, 10) / 100
            });
            break;
        case '.':
          if (this.state.result.toString().match("([+/*-])+")){
            this.setState({result: !this.state.num2.toString().includes(".")?this.state.result+value:this.state.result, num2:this.state.num2+value})
            // console.log(this.state.num)
          }
          else{
            this.setState({result: !this.state.num.toString().includes(".")?this.state.result+value:this.state.result, num:this.state.num+value})
          }
            
          break;
        case '+-':
          break;
        default:
        break;
      }}
  
  render(){
  return (
    <div className="calc">
       <
      Result result = {
        this.state.result
      }
      />
      <
      Buttons Buttonclicked = {
        this.handleclicks
      }
      />
    </div>
  );
}
}
export default App;
