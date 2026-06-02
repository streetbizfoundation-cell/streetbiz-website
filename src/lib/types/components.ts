import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  children: ReactNode
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export interface CardProps {
  children: ReactNode
  className?: string
  hoverable?: boolean
}

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface HeadingProps {
  as?: HeadingLevel
  children: ReactNode
  className?: string
}

export interface ParagraphProps {
  size?: 'sm' | 'base' | 'lg'
  children: ReactNode
  className?: string
}
