import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@radix-ui/react-dialog'
import { Button } from './ui/button'
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from '@radix-ui/react-radio-group'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { X } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const createGoalForm = z.object({
  title: z.string().min(1, 'Informe a atividade que deseja realizar'),
  desiredWeeklyFrequency: z.coerce.number().min(1).max(7),
})

export function CreateGoal() {
  const { register } = useForm({
    resolver: zodResolver(createGoalForm),
  })

  return (
    <DialogContent>
      <div className="flex flex-col gap-6 h-full">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <DialogTitle>Cadaxtra Ai</DialogTitle>
            <DialogClose>
              <X className="size-5 text-zinc-600" />
            </DialogClose>
          </div>
          <DialogDescription>Adciona tuas Metas ai</DialogDescription>
        </div>
        <form action="" className="flex-1 flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">kUÁlé a atividade?</Label>
              <Input
                id="title"
                autoFocus
                placeholder="Fazer uns Exercititos ai"
                {}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Quantas VZs na semana?</Label>
              <RadioGroup>
                <RadioGroupItem value="1">
                  <RadioGroupIndicator />
                  <span className="text-zinc-300 text-sm font-medium leading-none">
                    1x por semana
                  </span>
                  <span className="text-lg leading-none">🥱</span>
                </RadioGroupItem>
                <RadioGroupItem value="2">
                  <RadioGroupIndicator />
                  <span className="text-zinc-300 text-sm font-medium leading-none">
                    2x por semana
                  </span>
                  <span className="text-lg leading-none">🙂</span>
                </RadioGroupItem>
                <RadioGroupItem value="3">
                  <RadioGroupIndicator />
                  <span className="text-zinc-300 text-sm font-medium leading-none">
                    3x por semana
                  </span>
                  <span className="text-lg leading-none">😎</span>
                </RadioGroupItem>
                <RadioGroupItem value="4">
                  <RadioGroupIndicator />
                  <span className="text-zinc-300 text-sm font-medium leading-none">
                    4x por semana
                  </span>
                  <span className="text-lg leading-none">😜</span>
                </RadioGroupItem>
                <RadioGroupItem value="5">
                  <RadioGroupIndicator />
                  <span className="text-zinc-300 text-sm font-medium leading-none">
                    5x por semana
                  </span>
                  <span className="text-lg leading-none">🤨</span>
                </RadioGroupItem>
                <RadioGroupItem value="6">
                  <RadioGroupIndicator />
                  <span className="text-zinc-300 text-sm font-medium leading-none">
                    6x por semana
                  </span>
                  <span className="text-lg leading-none">🤯</span>
                </RadioGroupItem>
                <RadioGroupItem value="7">
                  <RadioGroupIndicator />
                  <span className="text-zinc-300 text-sm font-medium leading-none">
                    7x por semana
                  </span>
                  <span className="text-lg leading-none">🔥</span>
                </RadioGroupItem>
              </RadioGroup>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <DialogClose asChild>
              <Button type="button" className="flex-1" variant="secondary">
                FECHA
              </Button>
            </DialogClose>
            <Button className="flex-1">SALVAR</Button>
          </div>
        </form>
      </div>
    </DialogContent>
  )
}
