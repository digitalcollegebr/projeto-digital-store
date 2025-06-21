import React from 'react';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';

const Cadastro = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-6 sm:px-6 lg:px-8">
            <div className="w-full max-w-xs sm:max-w-sm">
                <div className="bg-white shadow-lg shadow-neutral-200 rounded-lg p-6 sm:p-7 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-xl sm:text-2xl font-bold mb-6 text-primary flex items-center justify-center">
                        Cadastro
                    </h2>
                    
                    <form
                        className="flex flex-col gap-4 w-full"
                        onSubmit={(e) => {
                            e.preventDefault();
                            // Aqui você pode adicionar a lógica de cadastro
                        }}
                    >
                        <div className="w-full">
                            <InputText
                                type="text"
                                placeholder="Nome completo"
                                className="w-full p-2 text-sm border border-gray-300 rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                            />
                        </div>

                        <div className="w-full">
                            <InputText
                                type="email"
                                placeholder="E-mail"
                                className="w-full p-2 text-sm border border-gray-300 rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                            />
                        </div>
                        
                        <div className="w-full">
                            <InputText
                                type="text"
                                placeholder="Usuário"
                                className="w-full p-2 text-sm border border-gray-300 rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                            />
                        </div>
                        
                        <div className="w-full">
                            <Password
                                variant="outlined"
                                feedback={true}
                                placeholder="Senha"
                                className="w-full"
                                inputClassName="w-full p-2 text-sm border border-gray-300 rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                                toggleMask={true}
                            />
                        </div>

                        <div className="w-full">
                            <Password
                                variant="outlined"
                                feedback={false}
                                placeholder="Confirmar senha"
                                className="w-full"
                                inputClassName="w-full p-2 text-sm border border-gray-300 rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                                toggleMask={true}
                            />
                        </div>
                        
                        <Button
                            label="Cadastrar"
                            className="w-full p-2 text-sm bg-primary text-white font-bold rounded-md hover:bg-primary-dark focus:ring-4 focus:ring-primary/30 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                            type="submit"
                        />
                    </form>
                    
                    <div className="mt-5 space-y-3">
                        <p className="text-gray-600 text-sm">
                            Já tem uma conta?
                            <Link
                                to="/Entrar"
                                className="text-primary font-bold hover:underline ml-1 transition-all duration-200 hover:text-primary-dark"
                            >
                                Faça login
                            </Link>
                        </p>
                        
                        <p className="text-gray-600 text-sm">
                            <Link
                                to="/"
                                className="text-primary font-bold hover:underline transition-all duration-200 hover:text-primary-dark"
                            >
                                Voltar para home
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cadastro;