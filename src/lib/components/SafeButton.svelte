<script>
    export let text = "SOS";
    function triggerAlert() {
        alert("Segnale di emergenza inviato (simulazione)");
    }
</script>

<button
    on:click={triggerAlert}
    class="px-4 py-2 bg-red-600 text-white rounded-xl shadow"
>
    {text}
</button>
