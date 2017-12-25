/*
 * @Author: hunaisong
 * @Date: 2017-12-22 13:56:05
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-12-25 15:19:05
 */
// 项目主入口文件，如同vue中的main.js

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// 首先创建方格组件
function Square(props) {
    return (
        <button className="square" onClick={() => props.onClick()} >
            {props.value}
        </button>
    )
}
// 再创建棋盘组件，棋盘，是把所有的方格组件合并到一起。接着就是事件部分
// 我们还需要一个共同的组件，来整合这两个组件的资源，状态提升的组件。说白了就是一个共同的父组件
class Board extends React.Component{
    renderSquare(i){
        return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />
    }
    render(){
        return (
            <div className="board" >
                <div className="board-row clearfix" >
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row clearfix" >
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row clearfix" >
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}
class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            history:[
                // 众多history中的一员，也可以说是，起始数据
                {squares:Array(9).fill(null)}
            ],
            XIsNext:true,
            stepNumber:0
        }
    }
    // 掌管下棋
    handleClick(i){
        let history = this.state.history.slice(0,this.state.stepNumber+1);
        let current = history[history.length-1];
        let squares = current.squares.slice();
        let winner = calculatorWinner(squares);
        // console.log(squares)
        if (winner || squares[i]) {
            return ;
        }
        this.state.XIsNext ? squares[i] = 'X' : squares[i] = 'O';
        // history.push(squares)
        this.setState({
            history:history.concat({
                squares:squares
                }),
            XIsNext:!this.state.XIsNext,
            stepNumber:history.length
        })
        // console.log(this.state.history)
    }
    jumpTo(step){
        // console.log('ssss')
        // 怎么才能让点击当前步骤，然后返回到那个步骤？
        this.setState({
            stepNumber:step,
            XIsNext:(step%2) ? false : true
        })
    }
    render(){
        // 所有的历史数据
        let history = this.state.history;
        // 最新的历史数据，有了步骤值之后，设置为当前步骤值所在
        let current = history[this.state.stepNumber];
        let winner = calculatorWinner(current.squares);
        console.log(history)
        let status;
        if (winner) {
            status = 'Winner ' + winner;
        }else{
            status = 'Next player ' + (this.state.XIsNext?'X':'O');
        }
        let moves = history.map((item,index) => {
            const desc = index ? 'Move #' + index : 'Game Start';
            return (
                <li key={index} >
                    <a href="#" onClick={() => this.jumpTo(index)} >
                        {desc}
                    </a>
                </li>
            )
        })
        return (
            <div className="game" >
                <Board 
                    squares={current.squares}
                    onClick = {(i) => this.handleClick(i)}
                    />
                <div className="result" >
                    <h2 className="msg" >{status}</h2>
                    <ol>
                        {moves}
                    </ol>
                </div>
            </div>
        )
    }
}
function calculatorWinner(squares) {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for (let i = 0; i < lines.length; i++) {
        let [a,b,c] = lines[i];
        if (squares[a] && squares[a]===squares[b]&&squares[a]===squares[c]) {
            // 如果遇到这种情况直接，跳出循环，并且返回当前的player。
            return squares[a];
        }
    }
    return null;
}
ReactDOM.render(<Game />,document.getElementById('root'))