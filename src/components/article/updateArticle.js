/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import FormContainer from '../common/formContainer';
import Input from '../common/input';
import '../../assets/scss/components/article/article.scss';

class UpdateArticle extends Component {
    state = { }

    render() {
      return (
            <div className='container'>
                <div className='articleForm'>
                    <FormContainer>
                        <Input
                            type="text"
                            className="articleForm__articleInput__add-tag"
                            name="description"
                            placeholder="Add tag"
                        />

                        <button type="submit" className="articleForm__publish">Publish</button>

                        <Input
                            type="text"
                            className="articleForm__articleInput"
                            name="title"
                            placeholder="Title"
                        />

                        <Input
                            type="text"
                            className="articleForm__articleInput"
                            name="description"
                            placeholder="Description"
                        />

                        <textarea
                            className="articleForm__articleInput"
                            onKeyUp="auto_grow(this)"
                            placeholder="Write your article ......">
                        </textarea>

                    </FormContainer>
                </div>
            </div>
      );
    }
}

export default UpdateArticle;
