"use client";
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="fecha" />
<YAxis />
<Tooltip />
<Legend />
<Line type="monotone" dataKey="vuelo" stroke="#2563EB" />
</LineChart>
</div>
</section>
)}


{activeTab === 'form' && (
<section className="bg-white p-6 rounded shadow max-w-3xl mx-auto">
<h2 className="text-2xl font-bold mb-4">{editingIndex !== null ? 'Editar Registro' : 'Nuevo Registro'}</h2>
<form onSubmit={handleSubmit} className="space-y-3">
{['nombre','rut','cargo','area','vuelo'].map(f => (
<input
key={f}
type="text"
placeholder={f.toUpperCase()}
value={formData[f]}
onChange={(e) => setFormData({...formData, [f]: e.target.value})}
className="w-full p-2 border rounded"
required
/>
))}


<div className="grid md:grid-cols-2 gap-3">
<div>
<h4 className="font-semibold">Transporte Llegada</h4>
{['fecha','desde','hasta','horario','vuelo'].map(f => (
<input
key={`l-${f}`}
type={f==='fecha'?'date': f==='horario'?'time':'text'}
placeholder={f.toUpperCase()}
value={formData.transporteLlegada[f]}
onChange={(e) => setFormData({...formData, transporteLlegada:{...formData.transporteLlegada,[f]: e.target.value}})}
className="w-full p-2 border rounded my-1"
required
/>
))}
</div>


<div>
<h4 className="font-semibold">Transporte Retorno</h4>
{['fecha','desde','hasta','horario','vuelo'].map(f => (
<input
key={`r-${f}`}
type={f==='fecha'?'date': f==='horario'?'time':'text'}
placeholder={f.toUpperCase()}
