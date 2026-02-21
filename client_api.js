
// Auto-generated Client API
const API_BASE = "https://statuesque-cupcake-e8da00.netlify.app:3000";

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(form));
            try {
                const res = await fetch(API_BASE, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                if(res.ok) { alert('Data Submitted Successfully!'); form.reset(); }
                else alert('Error submitting data');
                } catch (err) { console.error('API Error:', err); alert('Network Error'); }
            });
        });
        });