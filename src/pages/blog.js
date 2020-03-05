import React, { Component } from 'react'

export default class Blog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentId: "5e50d36b06646441dc1bc61b",
            blogItem: {}
        }

        this.getBlogItem = this.getBlogItem.bind(this);
    };

    getBlogItem() {
        fetch(`https://cors-anywhere.herokuapp.com/capstone-portfolio-backend.herokuapp.com/blogs/${this.state.currentId}`)
            .then(res => res.json())
            .then(blog => {
                console.log(blog)
                this.setState({
                    blogItem: blog
                })
            })    
                        
    }

    componentDidMount() {
        this.getBlogItem()
    }

    render() {
        const {
            title,
            date,
            body,
            gitUrl,
            libraries,
            frameworks,
            languages
        } = this.state.blogItem;

        return (
            <div className='blog-wrapper'>
                <h1>{title}</h1>
                <h2>{date}</h2>
                <h3>{gitUrl}</h3>
                <code>
                    const varObj = (args) => args.results
                </code>
                <div className="libraries">
                    {libraries}
                </div>
                <div className="frameworks">
                    {frameworks}
                </div>
                <div className="languages">
                    {languages}
                </div>
                <p>
                    {body}
                </p>
            </div>
        )
    }
}