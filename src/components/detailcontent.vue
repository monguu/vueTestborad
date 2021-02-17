<template>      
<b-container>
<div>
  <b-card
    overlay
    img-src="https://picsum.photos/900/250/?image=3"
    img-alt="Card Image"
    text-variant="white"
    title="Image Overlay"
    sub-title="Subtitle"
  >
    <b-card-text>
      Some quick example text to build on the card and make up the bulk of the card's content.
    </b-card-text>
  </b-card>
</div>
    <div>
        <b-form-textarea
            id=""
            placeholder="Tall textarea"
            rows="8"
        >
        {{context}}
        </b-form-textarea>
    </div>
</b-container>
</template>
<script>
import data from '@/data'
export default {
    name: "detailcontent",
    data () {
        const contentId = Number(this.$route.params.contentId);
        const contentData = data.Cotent.filter(item => item.content_id === contentId)[0]
        return {
            contentId: contentId,
            title: contentData.title,
            context: contentData.context,
            user: data.user.
            filter(item => item.user_id === contentData.user_id)[0].name,
            created: contentData.created_at
        }
    },
}
</script>
<style scoped>

</style>