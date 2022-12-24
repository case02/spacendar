// packages
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// utils
import { createComment, getUser, showComment } from '../../utils/api';

export default function Comment(props) {
	const [formData, setFormData] = useState({ comment: "" });
	const [showForm, setShowForm] = useState(false);
	const [comments, setComments] =useState([]);
	const [displayComments, setDisplayComments] = useState(false)
	
	// get comment function
	function getComments() {
		showComment().then((data) => setComments(data))
	}
	
	useEffect(() => {
		getComments();
	}, [])

	//handles
	function handleChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		createComment(formData).then(() => getComments()).finally(() => setFormData({ comment: "" }));
	}

	// const navigate = useNavigate();
	// const navigate = useNavigate();

	// redirect to home page if not logged in
	// useEffect(() => {
	// 	if (!props.isLoggedIn) {
	// 		navigate('/');
	// 	}
	// }, [props.isLoggedIn]);


	// render JSX
	return (
		<div className='comment-container'>	
			{!displayComments ? <div className="">
				<button className="btn btn-primary" onClick={()=>{setDisplayComments(!displayComments)}}>comments</button>
			</div> : null}
			{displayComments ? <div className="comment-display">
				<div className='comment-form'>
					<button
						className='btn btn-primary'
						onClick={() => {
							setShowForm(!showForm);
						}}>
						Leave a comment
					</button>
					{showForm && (
						<form>
							<input
								name='comment'
								className='form-control'
								type='text'
								placeholder='...'
								onChange={handleChange}
								value={formData.comment}
							/>

							<button className='btn btn-primary' onClick={handleSubmit}>
								Comment
							</button>
						</form>
					)}
				</div>
				<div className='display-comments'>
					<h1>Comments</h1>
					{console.log(comments)}
					{comments.map((comment) => (
						<div>
							User: {comment.user.username}: {comment.comment}
						</div>
					))}
				</div>
			</div> : null}
			
		</div>
	);
}
