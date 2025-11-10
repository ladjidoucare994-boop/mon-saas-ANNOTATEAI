import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Plateforme d'Annotation de Données
          </h1>
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">
            Propulsée par l'IA
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Connectez vos projets d'annotation avec des annotateurs qualifiés. 
            Accélérez votre production de données avec notre intelligence artificielle avancée.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/client/dashboard"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Accéder au Dashboard
            </Link>
            <Link
              href="#features"
              className="bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold text-lg border-2 border-blue-600 hover:bg-blue-50 transition-all transform hover:scale-105"
            >
              En savoir plus
            </Link>
          </div>
        </div>

        <div id="features" className="mt-32">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Une Plateforme Complète
          </h2>
          <p className="text-center text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Gérez vos projets d'annotation, vos annotateurs et votre acquisition client depuis une interface unique.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border border-blue-100">
              <div className="text-5xl mb-6">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Annotation Assistée par IA</h3>
              <p className="text-gray-600 leading-relaxed">
                Accélérez vos projets grâce à notre technologie propriétaire. 
                Réduisez les coûts et améliorez la qualité.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border border-purple-100">
              <div className="text-5xl mb-6">👥</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Réseau d'Annotateurs</h3>
              <p className="text-gray-600 leading-relaxed">
                Accédez à un réseau de freelanceurs qualifiés pour vos projets d'annotation de données.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border border-green-100">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Déploiement Rapide</h3>
              <p className="text-gray-600 leading-relaxed">
                Lancez vos projets d'annotation en moins de 5 minutes. C
cat >> app/page.tsx << 'ENDOFFILE'

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border border-yellow-100">
              <div className="text-5xl mb-6">💰</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Tarification Transparente</h3>
              <p className="text-gray-600 leading-relaxed">
                Prix clairs et compétitifs. Payez uniquement pour ce que vous utilisez, sans frais cachés.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border border-pink-100">
              <div className="text-5xl mb-6">🌍</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Support Multilingue</h3>
              <p className="text-gray-600 leading-relaxed">
                Annotez dans plus de 50 langues avec des annotateurs natifs qualifiés.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border border-indigo-100">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">API & Intégrations</h3>
              <p className="text-gray-600 leading-relaxed">
                Intégrez facilement avec vos outils existants via notre API REST complète.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-32 text-center bg-gradient-to-r from-blue-600 to-purple-600 p-16 rounded-3xl shadow-2xl">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Prêt à Transformer Vos Projets d'Annotation?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Rejoignez les entreprises qui font confiance à AnnotateAI pour leurs données.
          </p>
          <Link
            href="/client/dashboard"
            className="inline-block bg-white text-blue-600 px-12 py-5 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
          >
            Commencer Maintenant
          </Link>
        </div>
      </div>
    </div>
  )
}
