<script>
  let nombre = $state('');
  let contador = $state(0);
</script>

<main>
  <h1>Una página que responde</h1>

  <section>
    <h2>Tu nombre</h2>
    <input bind:value={nombre} placeholder="Escribe tu nombre" />
    <p>Hola, {nombre}</p>
  </section>

  <section>
    <h2>Contador</h2>
    <p class="numero">{contador}</p>
    <div class="botones">
      <button onclick={() => contador--}>-1</button>
      <button onclick={() => contador++}>+1</button>
      <button class="reiniciar" onclick={() => (contador = 0)}>Reiniciar</button>
    </div>
  </section>
</main>

<style>
  main {
    max-width: 480px;
    margin: 40px auto;
    padding: 0 16px;
    font-family: system-ui, sans-serif;
    color: #1e1b4b;
  }

  h1 {
    border-bottom: 4px solid #ff3e00;
    padding-bottom: 8px;
  }

  section {
    background: #f4f1ff;
    border-radius: 10px;
    padding: 16px 20px;
    margin-top: 20px;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #c4b5fd;
    border-radius: 6px;
    box-sizing: border-box;
  }

  .numero {
    font-size: 48px;
    font-weight: bold;
    margin: 8px 0;
  }

  .botones {
    display: flex;
    gap: 8px;
  }

  button {
    padding: 10px 16px;
    background: #ff3e00;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }

  button:hover {
    background: #d63500;
  }

  .reiniciar {
    background: #64748b;
  }

  .reiniciar:hover {
    background: #475569;
  }
</style>