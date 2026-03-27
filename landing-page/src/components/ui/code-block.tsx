'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const tabs = ['TypeScript', 'Python', 'REST API'] as const
type Tab = (typeof tabs)[number]

const codeSnippets: Record<Tab, string> = {
  TypeScript: `import { Aegis } from '@aegis/sdk'

const aegis = new Aegis({ apiKey: process.env.AEGIS_API_KEY })

// Run an eval suite in CI
const result = await aegis.eval.run({
  agent: myAgent,
  suite: 'production-v2',
  sandbox: true,
})

console.log(\`Pass rate: \${result.passRate}%\`)
// Pass rate: 97.4%`,

  Python: `from aegis import Aegis

aegis = Aegis(api_key=os.environ["AEGIS_API_KEY"])

# Run an eval suite in CI
result = aegis.eval.run(
    agent=my_agent,
    suite="production-v2",
    sandbox=True,
)

print(f"Pass rate: {result.pass_rate}%")
# Pass rate: 97.4%`,

  'REST API': `curl -X POST https://api.aegis.dev/v1/eval/run \\
  -H "Authorization: Bearer $AEGIS_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "suite": "production-v2",
    "sandbox": true,
    "agent_endpoint": "https://your-agent.dev/run"
  }'

# {"pass_rate": 97.4, "run_id": "run_abc123"}`,
}

interface CodeBlockProps {
  className?: string
}

export function CodeBlock({ className }: CodeBlockProps) {
  const [activeTab, setActiveTab] = useState<Tab>('TypeScript')

  return (
    <div className={cn('rounded-lg overflow-hidden border border-border', className)}>
      {/* Tab bar */}
      <div className="flex bg-code-bg border-b border-white/10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              'px-4 py-3 text-xs font-mono transition-colors',
              activeTab === tab
                ? 'text-white border-b-2 border-accent'
                : 'text-muted hover:text-white/70'
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Code content */}
      <div className="bg-code-bg p-6 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed text-code-text whitespace-pre">
          <code>{codeSnippets[activeTab]}</code>
        </pre>
      </div>
    </div>
  )
}
