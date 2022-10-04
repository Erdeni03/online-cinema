import { FC } from 'react'
import { useForm } from 'react-hook-form'

import AuthFields from '@/screens/auth/AuthFields'
import { useProfile } from '@/screens/profile/useProfile'

import SkeletonLoader from '@/ui/SkeletonLoader'
import Button from '@/ui/form-elements/Button'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import styles from './Profile.module.scss'
import { IProfileInput } from './profile.interface'

const Profile: FC = () => {
  const { handleSubmit, register, formState, setValue } = useForm<IProfileInput>({
    mode: 'onChange',
  })

  const { isLoading, onSubmit } = useProfile(setValue)

  return (
    <Meta title="Profile">
      <Heading title="Profile" />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {isLoading ? (
          <SkeletonLoader count={2} />
        ) : (
          <AuthFields register={register} formState={formState} isPasswordRequired={false} />
        )}

        <Button>Update</Button>
      </form>
    </Meta>
  )
}

export default Profile
