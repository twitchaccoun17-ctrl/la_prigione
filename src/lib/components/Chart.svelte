<script>
    import { onMount } from "svelte";
    import {
        Chart,
        BarController,
        BarElement,
        CategoryScale,
        LinearScale,
        Title,
    } from "chart.js";

    export let stats;
    let canvas;

    onMount(() => {
        Chart.register(
            BarController,
            BarElement,
            CategoryScale,
            LinearScale,
            Title,
        );
        new Chart(canvas.getContext("2d"), {
            type: "bar",
            data: {
                labels: [
                    "Fisica/Sessuale",
                    "Psicologica",
                    "Denunce",
                    "Femminicidi",
                ],
                datasets: [
                    {
                        label: "Dati esempio",
                        data: [
                            stats.physical,
                            stats.psychological,
                            stats.reports,
                            stats.femminicidi,
                        ],
                        backgroundColor: [
                            "#f87171",
                            "#60a5fa",
                            "#facc15",
                            "#34d399",
                        ],
                    },
                ],
            },
            options: { responsive: true },
        });
    });
</script>

<canvas bind:this={canvas}></canvas>
