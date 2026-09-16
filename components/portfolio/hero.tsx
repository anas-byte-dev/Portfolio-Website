'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Download,
  Mail,
  Play,
  Copy,
  Check,
  Terminal,
  Sparkles,
  Database,
  Layers,
  Code2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { profile } from '@/lib/portfolio-data'
import { GithubIcon, LinkedinIcon } from './icons'
import { scrollToSection } from '@/lib/scroll'

function useTypewriter(words: string[]) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    const done = text === current
    const empty = text === ''

    let delay = deleting ? 40 : 80
    if (done && !deleting) delay = 1600
    if (empty && deleting) delay = 350

    const timeout = setTimeout(() => {
      if (!deleting && done) {
        setDeleting(true)
        return
      }
      if (deleting && empty) {
        setDeleting(false)
        setWordIndex((i) => i + 1)
        return
      }
      setText((prev) =>
        deleting
          ? current.slice(0, prev.length - 1)
          : current.slice(0, prev.length + 1),
      )
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words])

  return text
}

const socials = [
  { icon: GithubIcon, href: profile.github, label: 'GitHub' },
  { icon: LinkedinIcon, href: profile.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
]

export function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20 sm:pt-32"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Left Column: Introductions & CTA */}
        <div>
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-card/60 px-3.5 py-1.5 font-mono text-xs text-foreground/90 backdrop-blur-md shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Available for GET & Java Developer Roles
          </motion.div>

          {/* Name Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-balance text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-foreground via-primary to-emerald-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </motion.h1>

          {/* Animated Role Prompt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 flex min-h-9 items-center font-mono text-lg text-primary sm:text-xl"
          >
            <span className="text-muted-foreground mr-2 font-semibold">
              $
            </span>
            <span className="font-semibold">{typed}</span>
            <span className="ml-1 inline-block h-5 w-[2.5px] animate-pulse bg-primary" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <Button
              size="lg"
              className="group gap-2 shadow-lg shadow-primary/20 transition-all hover:shadow-primary/35"
              nativeButton={false}
              render={
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('projects')
                  }}
                />
              }
            >
              Explore Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-border/80 hover:border-primary/50"
              nativeButton={false}
              render={
                <a
                  href={profile.resume}
                  download="Anas_Siddiqui_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <Download className="h-4 w-4 text-primary" />
              Download Resume
            </Button>
          </motion.div>

          {/* Social Icons with spring lift */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex items-center gap-3"
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/60 text-muted-foreground shadow-sm backdrop-blur-sm transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
            <div className="ml-2 h-4 w-[1px] bg-border" />
            <span className="font-mono text-xs text-muted-foreground">
              Based in India · Open to Relocate
            </span>
          </motion.div>
        </div>

        {/* Right Column: Interactive Terminal & Floating Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative"
        >
          {/* Floating Levitating Badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 -left-6 z-20 hidden items-center gap-1.5 rounded-xl border border-border/80 bg-card/90 px-3 py-1.5 font-mono text-xs font-semibold shadow-lg backdrop-blur-md sm:flex"
          >
            <span className="text-amber-500">☕</span>
            <span>Java 17</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.6,
            }}
            className="absolute -bottom-5 -left-4 z-20 hidden items-center gap-1.5 rounded-xl border border-border/80 bg-card/90 px-3 py-1.5 font-mono text-xs font-semibold shadow-lg backdrop-blur-md sm:flex"
          >
            <span className="text-emerald-500">🍃</span>
            <span>Spring Boot</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.2,
            }}
            className="absolute -top-6 -right-4 z-20 hidden items-center gap-1.5 rounded-xl border border-border/80 bg-card/90 px-3 py-1.5 font-mono text-xs font-semibold shadow-lg backdrop-blur-md sm:flex"
          >
            <span className="text-sky-400">⚛️</span>
            <span>React.js</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.8,
            }}
            className="absolute -bottom-5 -right-5 z-20 hidden items-center gap-1.5 rounded-xl border border-border/80 bg-card/90 px-3 py-1.5 font-mono text-xs font-semibold shadow-lg backdrop-blur-md sm:flex"
          >
            <span className="text-blue-500">🐬</span>
            <span>MySQL</span>
          </motion.div>

          <InteractiveTerminalCard />
        </motion.div>
      </div>
    </section>
  )
}

const files = {
  java: {
    name: 'Developer.java',
    icon: Code2,
    code: `package com.anas.portfolio;

@Component
public class Developer {
  private final String name = "Anas Siddiqui";
  private final String role = "Java Full Stack Developer";
  private final String[] stack = {
    "Java 17", "Spring Boot", "React.js", "MySQL"
  };

  public Status buildSolution() {
    return new Status("Engine online: ready for production!");
  }
}`,
  },
  yml: {
    name: 'application.yml',
    icon: Layers,
    code: `server:
  port: 8080

spring:
  datasource:
    url: jdbc:mysql://localhost:3306/portfolio_db
    driver-class-name: com.mysql.cj.jdbc.Driver
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true`,
  },
  sql: {
    name: 'schema.sql',
    icon: Database,
    code: `CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

CREATE TABLE developers (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  specialization VARCHAR(100),
  status VARCHAR(50) DEFAULT 'ACTIVE'
);`,
  },
}

type FileKey = keyof typeof files

function InteractiveTerminalCard() {
  const [activeTab, setActiveTab] = useState<FileKey>('java')
  const [copied, setCopied] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [logs, setLogs] = useState<string[]>([])
  const [showConsole, setShowConsole] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(files[activeTab].code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleRunCode = () => {
    setIsRunning(true)
    setShowConsole(true)
    setLogs(['$ mvn spring-boot:run'])

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        '[INFO] Compiling Developer.java & schema...',
      ])
    }, 450)

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        '[INFO] Starting Application using Java 17 on port 8080',
        '2026-09-10 INFO  HikariDataSource : Connected to MySQL db `portfolio_db`',
      ])
    }, 900)

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        '[SUCCESS] Tomcat initialized on port 8080 (http)',
        '✨ Anas Siddiqui: Ready to engineer high-impact solutions!',
      ])
      setIsRunning(false)
    }, 1500)
  }

  return (
    <div className="relative">
      {/* Ambient Glow behind terminal */}
      <div
        aria-hidden="true"
        className="absolute -inset-2 -z-10 rounded-2xl bg-gradient-to-tr from-primary/20 via-emerald-500/10 to-teal-400/20 blur-2xl"
      />

      <div className="overflow-hidden rounded-2xl border border-border/80 bg-card/90 shadow-2xl backdrop-blur-xl">
        {/* Terminal Header & File Tabs */}
        <div className="flex flex-wrap items-center justify-between border-b border-border/80 bg-secondary/40 px-4 py-2.5 gap-2">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
          </div>

          {/* File Switcher Tabs */}
          <div className="flex items-center gap-1 rounded-lg border border-border/50 bg-background/50 p-1">
            {(Object.keys(files) as FileKey[]).map((key) => {
              const file = files[key]
              const Icon = file.icon
              const isActive = activeTab === key && !showConsole
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setActiveTab(key)
                    setShowConsole(false)
                  }}
                  className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-xs transition-colors ${
                    isActive
                      ? 'bg-card text-primary font-medium shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon className="h-3 w-3" />
                  <span>{file.name}</span>
                </button>
              )
            })}
          </div>

          {/* Actions: Run & Copy */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleRunCode}
              disabled={isRunning}
              className="inline-flex items-center gap-1 rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground disabled:opacity-50"
              title="Execute & Simulate Application"
            >
              <Play className="h-3 w-3 fill-current" />
              <span>{isRunning ? 'Building...' : 'Run'}</span>
            </button>

            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border/50 bg-background/50 text-muted-foreground transition-colors hover:text-foreground"
              title="Copy code"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-emerald-500" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* Code / Console Area */}
        <AnimatePresence mode="wait">
          {!showConsole ? (
            <motion.pre
              key={activeTab}
              initial={{ opacity: 0, x: 22 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -22 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed text-foreground/90 select-text"
            >
              <code>{files[activeTab].code}</code>
            </motion.pre>
          ) : (
            <motion.div
              key="console"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="p-5 font-mono text-xs leading-relaxed"
            >
              <div className="mb-3 flex items-center justify-between border-b border-border/60 pb-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Terminal className="h-3.5 w-3.5 text-primary" />
                  <span>Spring Boot Console Output</span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowConsole(false)}
                  className="text-[11px] underline hover:text-foreground"
                >
                  Return to Code
                </button>
              </div>

              <div className="space-y-1.5">
                {logs.map((log, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={
                      log.includes('[SUCCESS]') || log.includes('✨')
                        ? 'text-emerald-400 font-semibold'
                        : log.includes('2026')
                        ? 'text-sky-400'
                        : 'text-muted-foreground'
                    }
                  >
                    {log}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer status bar */}
        <div className="flex items-center justify-between border-t border-border/60 bg-secondary/30 px-4 py-2 font-mono text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Sparkles className="h-3 w-3 text-primary" />
            JVM: HotSpot 64-Bit Server VM
          </span>
          <span>UTF-8 · LF</span>
        </div>
      </div>
    </div>
  )
}
