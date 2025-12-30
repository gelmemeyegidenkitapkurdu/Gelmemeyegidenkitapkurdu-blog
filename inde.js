import supabase from '../lib/supabaseClient'

export async function getServerSideProps() {
  const { data } = await supabase
    .from('blog_posts')
    .select('id, title, content')

  return {
    props: {
      items: data || [],
    },
  }
}
