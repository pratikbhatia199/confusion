import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(selectedDish) {
        if (selectedDish != null) {
        if (selectedDish.comments != null) {
            const comments = selectedDish.comments.map((comment) => {
                return (
                    <div>
                    <p> {comment.comment}</p>
                    <p> --- {comment.author} {comment.date} </p>
                    </div> 
                );
            });
            return (
            <div>
                <h4>Comments</h4> 
                {comments}               
            </div>
            );
        }
        else 
        return (<div></div>);
    }
    else 
        return (<div></div>);

    }

    render() {
            

        return (
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.selectedDish)}
                </div>
                {this.renderComments(this.props.selectedDish)}
            </div>
        );
    }
}
    
export default DishDetail;