import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class PostManager extends React.Component<any, any> {
  renderField = (field: any) => {
    const { touched, error } = field.meta;
    const errorClasses = touched && error ? 'has-danger' : ''; 
    return (
      <div className={`form-group ${errorClasses}`}>
        <label className="form-label">
          {field.label}
        </label>
        <input 
          type={field.type}
          className="form-control"
          {...field.input}
        />
        <div className="form-control-feedback">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit = (values: any) => {
    console.log(values);
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="new-post">
        <form onSubmit={handleSubmit(this.onSubmit)} className="new-post__form">
          <div className="form-group">
            <Field
              label="Title :"
              name="title"
              component={this.renderField}
              type="text"
            />
            <Field
              label="Categories :"
              name="categories"
              component={this.renderField}
              type="text"
            />
            <Field
              label="Content :"
              name="content"
              component={this.renderField}
              type="text"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-success">
              Save
            </button>
            <button type="reset" className="btn btn-primary">
              Reset
            </button>
            <Link to="/" className="btn btn-secondary">
              Home
            </Link>
          </div>
        </form>
      </div>
    )
  }
}

function validate(values: any) {

  const errors = {} as any;

  // Validate the inputs from the 'values'
  if (!values.title) {
    errors.title = 'Enter a title.';
  }

  if (!values.categories) {
    errors.categories = 'Enter some categories.';
  }
  
  if (!values.content) {
    errors.content = 'Please enter some content';
  }

  // If errors is empty, then fine to submit
  return errors;
}

// Form is the unique string identifier
export default reduxForm({
  form: 'PostsNewForm',
  validate,
})(
  connect()(PostManager)
);