import axios from 'axios';
import { useState } from 'react';
import {updateUser} from "../../utils/api";
import {deleteUser} from "../../utils/api";

export default function User(prop) {
	// function to reveal edit form
	const editForm = (e) => {
		if (e.target.id === 'edit-btn') {
			prop.edit(true);
		}
	};

	// edit form and changed states
	const [formState, setFormState] = useState(prop.user);

	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};

	const handleSubmitUpdateUser= (event) => {
		event.preventDefault();
		updateUser(prop.user._id, formState);
		prop.edit(false);
	};

	//delete user
	const destroyUser = () =>{
		deleteUser(prop.user._id);
		prop.setLogInStatus(false)
	}

    console.log('this is the userpage user', prop.user)
	return (
		<div className='display-body'>
			<div className="delete">
				<button id='edit-btn' className='btn btn-danger ' onClick={destroyUser}>
						Delete User
					</button>
			</div>
					
			<div clasName="edit">
				<div className='form-btn'>
					<button id='edit-btn' className='btn btn-primary ' onClick={editForm}>
						Edit User
					</button>
				</div>
				<div className='edit-form'>
					<form onSubmit={handleSubmitUpdateUser}>
						<label className='form-label' htmlFor='username'>
							Username:
						</label>
						<input
							className='form-control'
							id='username'
							type='text'
							onChange={handleChange}
							value={formState.username}
						/>

						<label className='form-label' htmlFor='password'>
							Password:
						</label>
						<input
							className='form-control'
							id='password'
							type='text'
							onChange={handleChange}
							value={formState.password}
						/>
						<button className='btn btn-primary' type='submit'>
							Save Changes
						</button>
					</form>
				</div>
			</div>
			
		</div>
	);
}
