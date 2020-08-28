import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'


export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       itemsList:[],
       currentItem:{
         text:'',
         key:''
       }
    }
  }
  handleInput=(e)=>{
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }

  addItem=e=>{
    e.preventDefault()
    const newItem=this.state.currentItem;
    console.log(newItem)
    if(newItem.text!==""){
      const newItems=[...this.state.itemsList,newItem]
      this.setState({
        itemsList:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }

  deleteItem=(key)=>{
    const newList=this.state.itemsList.filter(item=>item.key!==key)
    console.log(newList)
    this.setState({
      itemsList:newList
    })
    
  }

  updateValue=(key,text)=>{
    const items=this.state.itemsList
    items.map(item=>{
      if(item.key===key){
        item.text=text
      }
    })
    console.log(items)
    this.setState({
      itemsList:items
    })
  }
  
  render() {
    return (
      <div className="App">
        <header>
        <form id="to-do-form" onSubmit={this.addItem}>
        <input type="text" placeholder="Enter To-dos" onChange={this.handleInput} value= {this.state.currentItem.text}></input>
      
        <button type="submit">Add</button>
        </form>
        </header>
        <ListItem itemsList={this.state.itemsList} deleteItem={this.deleteItem} updateValue={this.updateValue}/>
      </div>
    )
  }
}

export default App



