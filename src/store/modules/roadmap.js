// import axios from 'axios';

const roadmap = {
  name: 'Frontend',
  list: [
    {
      order: 1,
      title: "HTML",
      active: true,
      nodes: [
        {
          order: 1,
          title: "Learn the basics",
          nodes: []
        },
        {
          order: 2,
          title: "Writing semantic HTML",
          nodes: []
        },
        {
          order: 2,
          title: "Basic SEO",
          nodes: []
        },
        {
          order: 2,
          title: "Accesibility",
          nodes: []
        }
      ]
    },
    {
      order: 1,
      title: "CSS",
      active: false,
      nodes: [
        {
          order: 1,
          title: "Learn the basics",
          nodes: []
        },
        {
          order: 2,
          title: "Making layouts",
          nodes: []
        },
        {
          order: 3,
          title: "Media queries",
          nodes: []
        },
        {
          order: 4,
          title: "Learn CSS3",
          nodes: []
        }
      ]
    }
  ],
  nodes: []
}


const state = {
  roadmap: roadmap,
  loading: false,
  loaded: false,
  success: false,
  error: false,
  errorMessage: ''
};

const mutations = {
  LOADING_ROADMAP: state => {
    state.loading = true;
  },
  LOAD_ROADMAP_SUCCESS: (state, roadmap) => {
    (state.roadmap = roadmap),
      (state.success = true),
      (state.loading = false),
      (state.loaded = true),
      (state.success = true),
      (state.error = false),
      (state.errorMessage = '');
  },
  LOAD_ROADMAP_FAILURE: (state, payload) => {
    (state.loading = false),
      (state.loaded = true),
      (state.success = false),
      (state.error = true),
      (state.errorMessage = payload.message || 'Error getting roadmap');
  },

};

const actions = {
  loadRoadmap({ commit }) {
    commit('LOADING_ROADMAP');
    commit('LOAD_ROADMAP_SUCCESS', roadmap)
  }
};

const getters = {
  currentRoadmap: state => state.roadmap,
  currentRoadmapNodes: state => state.roadmap.nodes,
  currentRoadmapList: state => state.roadmap.list
}

export default {
  state,
  actions,
  mutations,
  getters
};
