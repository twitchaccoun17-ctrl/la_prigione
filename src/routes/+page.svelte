<script>
    import Chart from "$lib/components/Chart.svelte";
    import SafeDoorCard from "$lib/components/SafeDoorCard.svelte";
    import SafeButton from "$lib/components/SafeButton.svelte";

    // Esempio dati dal Modulo 1
    const stats = {
        physical: 31,
        psychological: 45,
        reports: 10,
        femminicidi: 100,
    };
</script>

<section>
    <h2 class="text-2xl font-semibold mb-4">Visualizzazione Dati</h2>
    <p class="mb-4">Grafico sintetico del fenomeno (dati esempio)</p>
    <Chart {stats} />
</section>

<section class="mt-10">
    <h2 class="text-2xl font-semibold mb-4">Proposta Tecnologica Etica</h2>
    <SafeDoorCard />
    <div class="mt-4">
        <SafeButton text="Simula SOS" />
    </div>
</section>
