import {Button} from '@/components/ui/button';
import {motion} from 'framer-motion';
import {ArrowRight, CheckCircle2, Play} from 'lucide-react';
import {Link} from 'react-router-dom';
import {PhoneMockup} from './PhoneMockup';

const benefits = [
    'Faturas rápidas',
    'Controlo de stock',
    'Relatórios claros',
    'Gestão de vendas',
    'Sem surpresas no preço',
];
export const HeroSection = () => {
    return (
        <section className='relative min-h-screen gradient-hero overflow-hidden pt-20'>
            {/* Background decorations */}
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl' />
                <div className='absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl' />
            </div>

            <div className='container mx-auto px-4 py-16 md:py-24'>
                <div className='grid lg:grid-cols-2 gap-12 items-center'>
                    {/* Content */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className='text-center lg:text-left'
                    >
                        {/* Badge */}
                        {/* <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Novo: Integração com AT Portugal
            </motion.div> */}

                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6'>
                            Faturação simples,{' '}
                            <span className='text-gradient'>
                                direto do telemóvel
                            </span>
                        </h1>

                        <p className='text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0'>
                            Crie e envie faturas profissionais em segundos.
                            Ideal para pequenos empreendedores e muitas outras
                            pequenas empresas em Angola.
                        </p>

                        {/* Benefits */}
                        <div className='flex flex-wrap justify-center lg:justify-start gap-4 mb-8'>
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit}
                                    initial={{opacity: 0, x: -20}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{delay: 0.4 + index * 0.1}}
                                    className='flex items-center gap-2 text-muted-foreground'
                                >
                                    <CheckCircle2 className='w-5 h-5 text-success' />
                                    <span>{benefit}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.6}}
                            className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'
                        >
                            <Link
                                to={
                                    'https://download1582.mediafire.com/9ug1vsqohdrgcrxSAzQcm98nIT2tAqu-bC68zfnFD9_1rMWYtKZ2usja0w-A60kQh41Fi9OZsvNk5ICxBbyfmPSOQrGa5b3XytVfNbPuC20UyXzaVNvEE-x5VYXwzOT7-G1jpAcvrQZuzRxfPPsqCite8KsU_FFnsquswi7FNVPtDFnt/2aogp7uyefs9360/bancada_v1.apk'
                                }
                            >
                                <Button
                                    variant='hero'
                                    size='xl'
                                    className='group'
                                >
                                    Descarregar
                                    <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                                </Button>
                            </Link>
                            <Button
                                variant='heroOutline'
                                size='xl'
                                className='group'
                            >
                                <Play className='w-5 h-5' />
                                Ver Demo
                            </Button>
                        </motion.div>

                        {/* Social proof */}
                        <motion.p
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.8}}
                            className='mt-8 text-sm text-muted-foreground'
                        >
                            <span className='font-semibold text-foreground'>
                                +5.000
                            </span>{' '}
                            empresas já confiam em nós
                        </motion.p>
                    </motion.div>

                    {/* Phone Mockup */}
                    <motion.div
                        initial={{opacity: 0, scale: 0.9}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.8, delay: 0.3}}
                        className='relative flex justify-center lg:justify-end'
                    >
                        <PhoneMockup />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
