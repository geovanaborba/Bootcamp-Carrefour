package me.dio.academia.digital.repository;

import java.util.List;
import me.dio.academia.digital.entity.Matricula;

public interface MatriculaRepository {

    public Matricula save(Matricula matricula);

    public Object findById(Long id);

    public List<Matricula> findAll();
}
