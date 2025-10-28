type Props = {
  icon: React.ReactNode
  title: string
  description: string
}

export function ServiceBubble({ icon, title, description }: Props) {
  return (
    <div className="bg-saddle-800/50 backdrop-blur-sm border border-rust-900 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-rust-500/10">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-100 leading-relaxed">{description}</p>
    </div>
  )
}
