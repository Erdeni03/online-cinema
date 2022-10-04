import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'

import SkeletonLoader from '@/ui/SkeletonLoader'
import { useUpload } from '@/ui/form-elements/UploadField/useUpload'
import { IUploadField } from '@/ui/form-elements/form.interface'

import s from '../form.module.scss'

const UploadField: FC<IUploadField> = ({
  error,
  folder,
  placeholder,
  value,
  isNoImage = false,
  onChange,
  style,
}) => {
  const { isLoading, uploadFile } = useUpload(onChange, folder)
  return (
    <div className={cn(s.field, s.uploadField)}>
      <div className={s.uploadFlex}>
        <label>
          <span>{placeholder}</span>
          <input type="file" onChange={uploadFile} />
          {error && <div className={s.error}>{error.message}</div>}
        </label>

        {!isNoImage && (
          <div className={s.uploadImageContainer}>
            {isLoading ? (
              <SkeletonLoader count={1} className="w-full h-full" />
            ) : (
              value && <Image src={value} alt="" layout="fill" unoptimized />
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default UploadField
