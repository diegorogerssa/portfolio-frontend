export const Contact = () => {
  return (
    <section>
      <h2>Contatos</h2>
      <form className="flex flex-col" action="">
        <label htmlFor="nome">
          Nome
          <input className="border-2" type="text" name="nome" id="nome" />
        </label>
        <label htmlFor="email">
          Email
          <input className="border-2" type="text" name="email" id="email" />
        </label>
        <label htmlFor="msg">
          Mensagem
          <textarea
            className="border-2"
            name="msg"
            id="msg"
            cols={30}
            rows={10}
          ></textarea>
        </label>
        <button className="bg-gray-700" type="submit">
          Enviar
        </button>
      </form>
    </section>
  );
};
