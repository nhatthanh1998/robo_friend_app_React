import React, { Component } from 'react'
import { Card,Image } from 'semantic-ui-react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {robo} from './docs/Robo'
import styled,{keyframes} from 'styled-components'




const transform = keyframes`
0%, 20%, 60%, 100% {
		-webkit-transform: translateY(0);
		transform: translateY(0);
	}

	40% {
		-webkit-transform: translateY(-20px);
		transform: translateY(-20px);
	}

	80% {
		-webkit-transform: translateY(-10px);
		transform: translateY(-10px);
	}
`
const Container = styled.div`
width:100%;
min-height:100vh;
text-align:center;
background-color: #9e8fb2;
background-image: linear-gradient(315deg, #9e8fb2 0%, #a7acd9 74%);
.card_img{
  background-color:#e0f2f1;
}
.card_title{
  font-size:20px;
}
.title{
  font-size:40px;
  font-family: 'Press Start 2P', cursive;
}
.card{
  &:hover{
    animation:${transform} 1s;
  }
  -webkit-box-shadow: 0 7px 4px #777;
	-moz-box-shadow: 0 7px 4px #777;
	box-shadow: 0 7px 4px #777;
  text-align:center;
}
`

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      search_term : ''
    }
  }
  render_robo(){
    var search_term = this.state.search_term.toLowerCase()

    var robo_list = robo.filter(robo => robo.name.toLowerCase().includes(search_term))
    return robo_list.map(robo_friend=>{
      return (
        <div className="col-4 my-5">
        <Card className="card">
    <Image src={`https://robohash.org/${robo_friend.name}`} className="card_img"/>
    <Card.Content>
      <Card.Header className="card_title">{robo_friend.name}</Card.Header>
      <Card.Meta>
        <span className='date'>Email:</span> {robo_friend.email}
      </Card.Meta>
      <Card.Description>Phone number: {robo_friend.phone}</Card.Description>
    </Card.Content>
  </Card>
        </div>
      )
    })
  }
  render() {
    return (
        <Container>

          <div className="container">
          <span className="title">ROBOT FRIENDS APP</span>
          <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
          <input className="form-control" placeholder="Search a robot name" onChange={event=>{
            this.setState({
              search_term:event.target.value
            })
          }}/>
          </div>
          <div className="col-2"></div>
          
          </div>
        <div className="row">
        {this.render_robo()}
        </div>
        </div>
        </Container>
        
    )
  }
}

export default App;
