import api from '../../../service/api';

const getJokesRandom = async () => {
  const response = await api.get('random')
  return response.data
}

const getJokesCategory = async () => {
  const response = await api.get('categories')
  return response.data
}

let Home = {
  is_private: false,  

  render: async () => {
    const jokes = await getJokesRandom();
    const categories = await getJokesCategory();
    console.log(jokes)

      let view = `
          <div>
            <ul class="menu-list">
            ${categories.map( (category,index) => (
              `<li class="menu-item" key=${index}>${category}</li>`
            )).join('')}
            </ul>
            <img src=${jokes.icon_url}>
            <h1>${jokes.value}</h1>
          </div>
      `;

      return view
  },

  after_render: async () => {}    
}

export default Home;