import React from 'react';
import { useForm } from 'react-hook-form';
import RegisterHeaedr from '../components/Header/RegisterHeaedr';
import rocket_icon from '/rocketIcon.svg';

const Register = () => {
  const { register, handleSubmit, formState, watch } = useForm({
    mode: 'onBlur',
  });

  const { errors } = formState;

  console.log(errors);

  return (
    <div className='w-full bg-[#0A0D17]'>
      <RegisterHeaedr />
      <main className='w-full'>
        <div className='max-w-full m-0 mx-auto py-[67px] flex justify-center'>
          <div className=' z-[2] max-w-[1256px] h-[576px] rounded-[20px] w-full flex flex-col items-start  bg-[#FFFFFF0A] backdrop-filter-[380px]'>
            <div className='p-[20px] flex '>
              <div className='max-w-[506px] w-full h-[536px] flex flex-col justify-center items-center'>
                <div className='max-w-[426px] w-full mb-[41px]'>
                  <h2 className='mb-[8px] font-[Inter]  font-medium  text-[30px] leading-[36px] tracking-[-2%] text-white'>
                    Let’s connect constellations
                  </h2>
                  <p className='font-[Inter]  font-normal  text-[16px] leading-[19px] tracking-[-1%] text-white opacity-[60%]'>
                    Let's align our constellations! Reach out and let the magic
                    of collaboration illuminate our skies.
                  </p>
                </div>
                <div className='flex flex-col max-w-[426px] w-full'>
                  <form onSubmit={handleSubmit(onsubmit)} noValidate>
                    <div className='mb-[14px] flex'>
                      <div>
                        <input
                          className='w-[206px] h-[42px] mr-[14px] rounded-[5px] border-[1px] border-[#FFFFFF33] bg-[#FFFFFF0D] pl-[14px] py-[12px]'
                          type='text'
                          id='lastName'
                          placeholder='Last Name'
                          {...register('lastName', {
                            required: {
                              value: true,
                              message: 'this value is empty',
                            },
                            maxLength: {
                              value: 15,
                              message: 'Must be only 15 letters',
                            },
                          })}
                        />
                        {errors.lastName && (
                          <span className='text-red-500'>
                            {errors.lastName.message}
                          </span>
                        )}
                      </div>
                      <div>
                        <input
                          className='w-[206px] h-[42px] rounded-[5px] border-[1px] border-[#FFFFFF33] bg-[#FFFFFF0D] pl-[14px] py-[12px]'
                          type='text'
                          id='firstName'
                          placeholder='First Name'
                          {...register('firstName', {
                            disabled: watch('firstName') === '',
                            required: {
                              value: true,
                              message: 'this value is empty',
                            },
                            maxLength: {
                              value: 15,
                              message: 'Must be only 15 letters',
                            },
                          })}
                        />
                        {errors.firstName && (
                          <span className='text-red-500'>
                            {errors.firstName.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className='mb-[14px]'>
                      <input
                        className='w-[426px] h-[42px] rounded-[5px] border-[1px] border-[#FFFFFF33] bg-[#FFFFFF0D] pl-[14px] py-[12px]'
                        type='text'
                        id='Email'
                        placeholder='Email'
                        {...register('Email', {
                          required: {
                            value: true,
                            message: 'this value is empty',
                          },
                        })}
                      />
                      {errors.Email && (
                        <span className='text-red-500'>
                          {errors.Email.message}
                        </span>
                      )}
                    </div>
                    <div className=' mb-[14px]'>
                      <input
                        className='w-[426px] h-[42px] rounded-[5px] border-[1px] border-[#FFFFFF33] bg-[#FFFFFF0D] pl-[14px] py-[12px]'
                        type='number'
                        id='phoneNumber'
                        placeholder='Phone Number'
                        {...register('phoneNumber', {
                          required: {
                            value: true,
                            message: 'this value is empty',
                          },
                        })}
                      />
                      {errors.phoneNumber && (
                        <span className='text-red-500'>
                          {errors.phoneNumber.message}
                        </span>
                      )}
                    </div>
                    <div className='mb-[14px]'>
                      <textarea
                        className='w-[426px] h-[109px] rounded-[5px] border-[1px] border-[#FFFFFF33] bg-[#FFFFFF0D] pl-[14px] py-[12px]'
                        type='text'
                        id='UsersMessage'
                        placeholder='Message'
                        {...register('UsersMessage', {
                          maxLength: {
                            value: 150,
                            message: 'Must be only 150 letters',
                          },
                        })}
                      ></textarea>
                      {errors.UsersMessage && (
                        <span className='text-red-500'>
                          {errors.UsersMessage.message}
                        </span>
                      )}
                    </div>
                    <button
                      type='submit'
                      className='max-w-[426px] w-full h-[42px] rounded-[5px] bg-btn-gradient flex justify-center items-center font-[Inter]  font-medium text-[15px] leading-[18px] tracking-[-1%] text-white'
                    >
                      Send it to the moon
                      <div className='ml-[10px]'>
                        <img src={rocket_icon} alt='' />
                      </div>
                    </button>
                  </form>
                </div>
              </div>

              <div className='max-w-[516px] w-full p-[28px] h-[536px] ml-[60px] rounded-[12px]  bg-[url(/public/Cosmonaut.webp)] box-border bg-cover bg-center flex  items-end justify-center'>
                <div className='w-full flex flex-col  '>
                  <p className='max-w-[466px] w-full font-[Inter] font-normal text-[16px] leading-[19px] tracking-[-1%] text-white opacity-[70%]'>
                    “Two lunar months revealed Earth's fragile beauty against
                    vast silence, transforming my view of our place in the
                    universe.
                  </p>
                  <span className='mt-[6px] font-[Inter] font-medium text-[16px] leading-[19px] tracking-[-1%] text-white opacity-[80%]'>
                    Irinel Traista
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className='absolute top-[300px] left-[250px] bg-[#A604F2] w-[152px] h-[152px] opacity-[60%]  blur-[150px] z-[1]'></div>

      <div className='absolute top-[800px] left-[250px] bg-[#A604F2] w-[152px] h-[152px] opacity-[60%]  blur-[150px]'></div>

      <div className='absolute top-[550px] left-[1350px] bg-[#A604F2] w-[152px] h-[152px] opacity-[60%]  blur-[150px]'></div>
    </div>
  );
};

export default Register;
