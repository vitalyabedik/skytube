import React from 'react'

import Modal from 'antd/lib/modal/Modal'
import clsx from 'clsx'

import s from './CustomModal.module.scss'

type Props = {
  children: React.ReactNode
  className?: string
  open: boolean
  setOpen: (open: boolean) => void
  title: string
}

export const CustomModal: React.FC<Props> = ({ children, className, open, setOpen, title }) => {
  const handleOk = () => {
    setOpen(false)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const modalClasses = clsx(s.root, className)

  return (
    <Modal
      className={modalClasses}
      closeIcon={false}
      footer={[]}
      onCancel={handleCancel}
      onOk={handleOk}
      open={open}
      title={title}
      width={510}
    >
      {children}
    </Modal>
  )
}
