import supabase from '../lib/supabaseClient'

export async function getStaticProps() {
  const { data, error } = await supabase
    .from('interviews') // veya blog_posts, yazilar vs.
    .select('*')

  return {
    props: {
      items: data || [],
    },
    revalidate: 60,
  }
}
