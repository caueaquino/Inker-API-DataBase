import React, { Component } from 'react'

import './styles.css'

import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import CreatePost from '../CreatePost';
import MainFooter from '../MainFooter';

export default class Timeline extends Component {

    state = {
        feed: "",
        posts: []
    }

    componentDidMount(){
        var teste = window.location.pathname
        var teste2 = teste.split('timeline-')
        teste2 = teste2[1]
        if(teste2 === "software"){
            this.setState({feed: "Software"})
            
        }
        else if(teste2 === "analise"){
            this.setState({feed: "Análise"})
        }
        else if(teste2 === "eletrica"){
            this.setState({feed: "Elétrica"})
        }
        else if(teste2 === "mecanica"){
            this.setState({feed: "Mecânica"})
        }
        else if(teste2 === "automacao"){
            this.setState({feed: "Automação"})
        }
        else if(teste2 === "matematica"){
            this.setState({feed: "Matemática"})
        }
        else{
            this.setState({feed: "Principal"})
        }
    }
    render() {
        return (
            <section id="timeline">
                <Card className="card-top">
                    <h1>Feed {this.state.feed}</h1>
                    
                    <CreatePost></CreatePost>
                </Card>

                <Card className="card-post">
                    <header>

                    </header>

                    <section>
                        <h2>Nenhum post foi encontrado!</h2>
                    </section>

                    <footer></footer>
                </Card>

                <MainFooter></MainFooter>

                <Fab id="up-bt" color="primary" aria-label="ArrowTop" style={{position: 'fixed', right: '5%', bottom:'100px'}}>
                    <ArrowDropUpIcon />
                </Fab>
                
            </section>
        )
    }
}
