import supabase from '../lib/supabaseClient'

export async function getStaticProps() {
  const { data, error } = await supabase
  .from("blog_posts")
  .select('id, title, content')
  .order('created_at', { ascending: false })

  return {
    props: {
      items: data || [],
    },
    revalidate: 60,
  }
}
