<template>
    <div class="results-container">
        <div class="content">
            <div class="result" v-for="res of results">
                <div class="result-title" @click="goToRoadmap(res.id)">
                    <h3>{{res.title}}</h3>
                    <span>Estimated time: {{res.estimatedTime}}</span>
                </div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "SearchResultPage",
    data() {
      return {
        results: [
          {
            id: 1,
            title: 'How to become js developer',
            estimatedTime: '3 days, 4 hours',

          },
          {
            id: 2,
            title: 'How to become backend developer',
            estimatedTime: '1 month, 1 day'
          }
        ]
      }
    },
    methods: {
      goToRoadmap(id) {
        this.$router.push({path:`/roadmap/${id}`})
      }
    }
  }
</script>

<style scoped>
    .results-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 2rem;
    }

    .content {
        width: 650px;
        margin-left: 150px;
    }

    .result {
        text-align: left;
        margin: 1rem;
        border-bottom: 1px solid #eee;
        padding-bottom: 1rem;
    }

    .result-title h3 {
        margin: 0;
        cursor: pointer;
    }
</style>