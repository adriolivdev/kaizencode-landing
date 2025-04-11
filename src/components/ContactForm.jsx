// src/components/ContactForm.jsx
// Formulário de orçamento com campos básicos e estrutura responsiva

/**
 * Componente de formulário para solicitar orçamento ou enviar mensagem.
 */
export default function ContactForm() {
    return (
      <section className="bg-gray-900 py-16 px-6" id="formulario">
        <h3 className="text-3xl font-bold text-green-400 text-center mb-8">Solicite um Orçamento</h3>
        <form
          className="max-w-xl mx-auto flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault()
            alert('Mensagem enviada com sucesso! 🚀')
          }}
        >
          <input
            type="text"
            placeholder="Seu nome"
            className="p-3 rounded bg-gray-800 text-white placeholder-gray-400"
            required
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="p-3 rounded bg-gray-800 text-white placeholder-gray-400"
            required
          />
          <textarea
            placeholder="Fale um pouco sobre o seu projeto..."
            rows={4}
            className="p-3 rounded bg-gray-800 text-white placeholder-gray-400"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white py-3 rounded font-bold transition"
          >
            Enviar
          </button>
        </form>
      </section>
    )
  }
  