export default function AboutPage() {
  return (
    <section class="pt-24">
      <h2 class="text-4xl font-bold text-center dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50">About me</h2>

      <article class="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row">
        <div
          class="[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1"
        >
          <p style={{ width: '65ch' }}>
            Más de 2 años de experiencia como Desarrollador de Software.
            {' '}
            {' '}
            <strong>Enseñé programación a muchas personas de múltiples edades,</strong>
            {' '}
            para mí fue unos de mis mayores logros con solo 17 años.
          </p>

          <p style={{ width: '65ch' }}>Actualmente continuó en el camino de programación sobre todo compartiendo mi conocimiento con muchas personas organizando clases particulares</p>
        </div>

        <img src="/profile-youtube.webp" alt="Sebastian Garcia" class="order-1 object-cover h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl" style={{ 'object-position': '50% 50%' }} />
      </article>
    </section>

  )
}
