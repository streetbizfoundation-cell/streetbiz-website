'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

interface TypographyProps {
  children: ReactNode
  className?: string
}

export function H1({ children, className }: TypographyProps) {
  return (
    <h1 className={cn('text-h1 font-bold text-neutral-900', className)}>
      {children}
    </h1>
  )
}

export function H2({ children, className }: TypographyProps) {
  return (
    <h2 className={cn('text-h2 font-bold text-neutral-900', className)}>
      {children}
    </h2>
  )
}

export function H3({ children, className }: TypographyProps) {
  return (
    <h3 className={cn('text-h3 font-semibold text-neutral-900', className)}>
      {children}
    </h3>
  )
}

export function H4({ children, className }: TypographyProps) {
  return (
    <h4 className={cn('text-h4 font-semibold text-neutral-900', className)}>
      {children}
    </h4>
  )
}

export function H5({ children, className }: TypographyProps) {
  return (
    <h5 className={cn('text-h5 font-semibold text-neutral-900', className)}>
      {children}
    </h5>
  )
}

export function H6({ children, className }: TypographyProps) {
  return (
    <h6 className={cn('text-h6 font-semibold text-neutral-900', className)}>
      {children}
    </h6>
  )
}

export function Paragraph({ children, className }: TypographyProps) {
  return (
    <p className={cn('text-base text-neutral-700 leading-relaxed', className)}>
      {children}
    </p>
  )
}

export function Lead({ children, className }: TypographyProps) {
  return (
    <p className={cn('text-body-lg font-medium text-neutral-700 leading-relaxed', className)}>
      {children}
    </p>
  )
}

export function Small({ children, className }: TypographyProps) {
  return (
    <p className={cn('text-body-sm text-neutral-600', className)}>
      {children}
    </p>
  )
}

export function Muted({ children, className }: TypographyProps) {
  return (
    <p className={cn('text-body-sm text-neutral-500', className)}>
      {children}
    </p>
  )
}

export function Quote({ children, className }: TypographyProps) {
  return (
    <blockquote
      className={cn(
        'border-l-4 border-primary-500 pl-4 italic text-neutral-700',
        className
      )}
    >
      {children}
    </blockquote>
  )
}
