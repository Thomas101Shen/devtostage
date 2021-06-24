import React from 'react'
import Items from './pgComponents/demoPictures'
import './Services.css'


const Services = () => {
	return (
		<body>
			<h1>
			Services
			</h1>
		{Items.map((picture, index) => {
			return (
				<div className='row' >
					<p>
						"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
					</p>
					<img src={picture.image} alt=''/>
				</div>
				)
		})}
		</body>
	)
}

export default Services